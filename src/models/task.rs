use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};

#[derive(Debug, Default, Serialize, Deserialize)]
pub struct Task {
    #[serde(rename = "_id", skip_serializing)]
    pub id: Option<ObjectId>, // MongoDB generates this automatically if not specified
    pub title: String,
    pub description: String,
    pub done: bool,
    pub user_id: ObjectId,
}
