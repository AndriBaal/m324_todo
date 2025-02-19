use crate::app::AppState;

use actix_web::{get, post, web, Responder};
use serde::Deserialize;

#[derive(Deserialize)]
struct UserForm {
    username: String,
    password: String,
}

#[get("/login")]
async fn login_get(app: web::Data<AppState>) -> impl Responder {
    ""
}

#[post("/login")]
async fn login_post(
    app: web::Data<AppState>,
    web::Form(form): web::Form<UserForm>,
) -> impl Responder {
    ""
}

#[get("/signup")]
async fn signup_get(app: web::Data<AppState>) -> impl Responder {
    ""
}

#[post("/signup")]
async fn signup_post(
    app: web::Data<AppState>,
    web::Form(form): web::Form<UserForm>,
) -> impl Responder {
    ""
}
