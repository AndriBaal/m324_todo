use askama::Template;

use crate::models::task::Task;

#[derive(Default, Template)]
#[template(path = "task_form.html")]
pub struct AddTask {
    pub errors: Vec<&'static str>,
}

#[derive(Template)]
#[template(path = "task_list.html")]
pub struct TaskList {
    pub tasks: Vec<Task>,
}
