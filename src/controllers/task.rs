use crate::{
    app::AppState,
    controllers::auth::AuthRequired,
    models::task::Task,
    views::{
        context::Context,
        task::{AddTask, TaskList},
    },
};
use actix_session::Session;
use actix_web::{
    Responder, get, post,
    web::{self, Data},
};
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
    task_id: ObjectId,
}

#[get("/", wrap = "AuthRequired")]
async fn index(app: Data<AppState>, session: Session) -> impl Responder {
    let user_id = app.user_id(&session);
    let tasks = app
        .tasks
        .find(doc! {
            "user_id": user_id
        })
        .await
        .unwrap()
        .try_collect::<Vec<_>>()
        .await
        .unwrap();

    let mut tasks = tasks;
    tasks.sort_by_key(|task| task.done);

    app.render_template(TaskList {
        tasks,
        ctx: Context::new(&app, session),
    })
}

#[get("/add", wrap = "AuthRequired")]
async fn add_get(app: Data<AppState>, session: Session) -> impl Responder {
    app.render_template(AddTask {
        errors: Default::default(),
        ctx: Context::new(&app, session),
    })
}

#[post("/add", wrap = "AuthRequired")]
async fn add_post(
    app: Data<AppState>,
    session: Session,
    web::Form(form): web::Form<AddTaskForm>,
) -> impl Responder {
    let user_id = app.user_id(&session);

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
        app.tasks
            .insert_one(Task {
                id: None,
                user_id: user_id,
                title,
                description,
                done: false,
            })
            .await
            .unwrap();
        return app.redirect("/");
    }

    return app.render_template(AddTask {
        errors,
        ctx: Context::new(&app, session),
    });
}

#[post("/delete", wrap = "AuthRequired")]
async fn delete(
    app: Data<AppState>,
    session: Session,
    web::Form(form): web::Form<TaskIdForm>,
) -> impl Responder {
    let user_id = app.user_id(&session);

    app.tasks
        .delete_one(doc! {"_id": form.task_id, "user_id": user_id })
        .await
        .unwrap();

    return app.redirect("/");
}

#[post("/update", wrap = "AuthRequired")]
async fn update(
    app: Data<AppState>,
    session: Session,
    web::Form(form): web::Form<TaskIdForm>,
) -> impl Responder {
    let user_id = app.user_id(&session);

    if let Some(task) = app
        .tasks
        .find_one(doc! {"_id": form.task_id, "user_id": user_id})
        .await
        .unwrap()
    {
        let new_done_status = !task.done;
        app.tasks
            .update_one(
                doc! {"_id": form.task_id},
                doc! {"$set": {"done": new_done_status}},
            )
            .await
            .unwrap();
    }

    return app.redirect("/");
}
