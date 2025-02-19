// use actix_session::Session;
use actix_web::{
    http::{header::HeaderValue, StatusCode},
    HttpResponse, HttpResponseBuilder,
};
use anyhow::Result;
use clap::Parser;
use mongodb::{options::ClientOptions, Client, Database};

/// CLI arguments for MongoDB connection
#[derive(Parser, Debug)]
#[command(name = "todo_app")]
#[command(about = "todo_app")]
pub struct Args {
    #[arg(long, env)]
    mongo_username: String,
    #[arg(long, env)]
    mongo_password: Option<String>,
    #[arg(long, env)]
    mongo_password_file: Option<String>,
    #[arg(long, env, default_value = "todo_app")]
    mongo_database: Option<String>,
    #[arg(long, env, default_value = "localhost")]
    mongo_host: String,
}

pub struct AppState {
    pub db: Database,
    pub args: Args,
}

impl AppState {
    pub async fn new() -> Result<Self> {
        env_logger::init();

        let args = Args::parse();
        let mongo_username = &args.mongo_username;
        let mongo_password = args.mongo_password.clone().unwrap_or_else(|| {
            if let Some(file) = args.mongo_password_file.as_ref() {
                return std::fs::read_to_string(file).unwrap();
            }
            return "".to_string();
        });
        let mongo_host = &args.mongo_host;
        let uri = format!(
            "mongodb://{}:{}@{}:27017",
            mongo_username, mongo_password, mongo_host
        );

        // Create a MongoDB client
        let client_options = ClientOptions::parse(&uri).await?;
        let client = Client::with_options(client_options)?;

        let db = client.database(&args.mongo_database.clone().unwrap_or("".to_string()));

        Ok(Self { db, args })
    }

    pub fn render_template<T: askama::Template>(&self, template: T) -> HttpResponse {
        let value = template.render().unwrap();
        HttpResponseBuilder::new(StatusCode::OK)
            .content_type(HeaderValue::from_static(T::MIME_TYPE))
            .body(value)
    }

    pub fn redirect(&self, location: &str) -> HttpResponse {
        HttpResponse::Found()
            .append_header(("Location", location))
            .finish()
    }

    pub fn redirect_login(&self) -> HttpResponse {
        self.redirect("/login")
    }

    // pub fn validate_session(&self, session: &Session) -> actix_web::Result<i64> {
    //     let user_id: Option<i64> = session.get("user_id")?;
    //     match user_id {
    //         Some(id) => {
    //             // keep the user's session alive
    //             session.renew();
    //             Ok(id)
    //         }
    //         None => Err(ErrorForbidden("Access denied")),
    //     }
    // }
}
