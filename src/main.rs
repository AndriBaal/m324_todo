pub mod app;
pub mod controllers;
pub mod models;
pub mod views;
pub mod tests;

use app::AppState;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let state = AppState::new().await.unwrap();
    models::setup_models();
    views::setup_views();
    controllers::setup_server(state).await
}
