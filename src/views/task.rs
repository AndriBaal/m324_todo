use askama::Template;

use crate::models::task::Task;

use super::context::Context;

#[derive(Template)]
#[template(path = "task_form.html")]
pub struct AddTask {
    pub errors: Vec<&'static str>,
    pub ctx: Context,
}

#[derive(Template)]
#[template(path = "task_list.html")]
pub struct TaskList {
    pub tasks: Vec<Task>,
    pub ctx: Context,
}
