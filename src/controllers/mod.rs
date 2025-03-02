use crate::app::AppState;

use actix_files::Files;
// use actix_identity::IdentityMiddleware;
// use actix_session::{config::PersistentSession, SessionMiddleware};
use actix_web::{
    // cookie::{time::Duration, Key},
    web, App, HttpServer,
};

// pub mod auth_controller;
pub mod task_controller;

pub async fn setup_server(state: AppState) -> std::io::Result<()> {
    // let mongo_session_store = crate::models::session::connect_and_init(&state.db, "Sessions").await;
    // let secret_key = Key::generate();
    let data = web::Data::new(state);

    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::clone(&data))
            // .wrap(
            //     IdentityMiddleware::builder()
            //         .logout_behaviour(actix_identity::config::LogoutBehaviour::PurgeSession)
            //         .build(),
            // )
            // .wrap(
            //     SessionMiddleware::builder(mongo_session_store.clone(), secret_key.clone())
            //         .cookie_http_only(false)
            //         .cookie_same_site(actix_web::cookie::SameSite::Strict)
            //         .cookie_content_security(actix_session::config::CookieContentSecurity::Private)
            //         .session_lifecycle(
            //             PersistentSession::default()
            //                 .session_ttl(Duration::weeks(2))
            //                 .session_ttl_extension_policy(
            //                     actix_session::config::TtlExtensionPolicy::OnEveryRequest,
            //                 ),
            //         )
            //         .build(),
            // )
            .service(Files::new("/static", "./static").show_files_listing())
            .service(task_controller::index)
            .service(task_controller::add_get)
            .service(task_controller::add_post)
            .service(task_controller::delete)
            .service(task_controller::update)
    })
    .bind(("0.0.0.0", 80))?
    .run()
    .await
}
