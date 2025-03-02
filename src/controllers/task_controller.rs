use crate::{
    app::AppState,
    models::task::Task,
    views::task::{AddTask, TaskList},
};
use actix_web::{get, post, web, Responder};
use bson::{doc, oid::ObjectId};
use futures::TryStreamExt;
use serde::Deserialize;

#[derive(Deserialize)]
struct AddTaskForm {
    title: String,
    description: String,
}

#[derive(Deserialize)]
struct TaskIdForm {
    task_id: ObjectId
}

#[get("/")]
async fn index(app: web::Data<AppState>) -> impl Responder {
    let tasks = app
        .db
        .collection::<Task>("Task")
        .find(doc! {})
        .await
        .unwrap()
        .try_collect::<Vec<_>>()
        .await
        .unwrap();

    let mut tasks = tasks;
    tasks.sort_by_key(|task| task.done);

    app.render_template(TaskList { tasks })
}

#[get("/add")]
async fn add_get(app: web::Data<AppState>) -> impl Responder {
    app.render_template(AddTask::default())
}

#[post("/add")]
async fn add_post(
    app: web::Data<AppState>,
    web::Form(form): web::Form<AddTaskForm>,
) -> impl Responder {
    let mut errors = vec![];

    let title = form.title;
    let description = form.description;
    if title.is_empty() {
        errors.push("Title cannot be empty!");
    }
    if description.is_empty() {
        errors.push("Description cannot be empty!");
    }

    if errors.is_empty() {
        app.db
            .collection::<Task>("Task")
            .insert_one(Task {
                id: None,
                title,
                description,
                done: false
            })
            .await
            .unwrap();
        return app.redirect("/");
    }

    return app.render_template(AddTask { errors });
}


#[post("/delete")]
async fn delete(
    app: web::Data<AppState>,
    web::Form(form): web::Form<TaskIdForm>,
) -> impl Responder {
    app
        .db
        .collection::<Task>("Task")
        .delete_one(doc! {"_id": form.task_id})
        .await
        .unwrap();

    return app.redirect("/");
}


#[post("/update")]
async fn update(
    app: web::Data<AppState>,
    web::Form(form): web::Form<TaskIdForm>,
) -> impl Responder {
    let collection = app.db.collection::<Task>("Task");
    
    if let Some(task) = collection.find_one(doc! {"_id": form.task_id}).await.unwrap() {
        let new_done_status = !task.done;
        collection.update_one(
            doc! {"_id": form.task_id},
            doc! {"$set": {"done": new_done_status}},
        ).await.unwrap();
    }
    
    return app.redirect("/");
}

