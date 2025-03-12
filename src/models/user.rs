use mongodb::{
    IndexModel,
    bson::{doc, oid::ObjectId},
    options::IndexOptions,
};
use serde::{Deserialize, Serialize};

use crate::app::AppState;

#[derive(Debug, Default, Serialize, Deserialize)]
pub struct User {
    #[serde(rename = "_id", skip_serializing)]
    pub id: Option<ObjectId>, // MongoDB generates this automatically if not specified
    pub username: String,
    pub password: String,
}

pub async fn setup_index(app: &AppState) {
    let _ = app.users.drop_indexes().await;
    let index_model = IndexModel::builder()
        .keys(doc! { "username": 1 }) // 1 for ascending index
        .options(IndexOptions::builder().unique(true).build()) // Ensure uniqueness
        .build();

    app.users.create_index(index_model).await.unwrap();
}
