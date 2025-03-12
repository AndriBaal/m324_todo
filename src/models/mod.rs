use crate::app::AppState;

pub mod session;
pub mod task;
pub mod user;

pub async fn setup_models(app: &AppState) {
    if app.args.rebuild_indexes {
        session::setup_index(app).await;
        user::setup_index(app).await;
    }
}
