import ButtonDone from "./finishTask.js";
import { loadTask } from "./loadTask.js";
import ButtonRemove from "./removeTask.js";

export const handleNovoItem = (event) => {
    event.preventDefault();

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const input = document.querySelector('[data-form-input]');
    const valueTask = input.value;
    
    const calendar = document.querySelector('[data-form-date]');
    const date = moment(calendar.value);
    const dateHandled = date.format("DD/MM/YYYY");
    const timeTask = date.format("HH:mm")
    const finished = false;

    const data = {
        valueTask,
        dateHandled,
        timeTask,
        finished
    };

    const updatedTasks = [...tasks, data];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    input.value = "";

    loadTask();
}

export const Task = ( { valueTask, timeTask, finished  }, id ) => {

    const task = document.createElement('li');
    const content = `<p class="content">${timeTask} * ${valueTask}</p>`; 
    if(finished){
        task.classList.add('done');
    }
    task.classList.add('task');

    task.innerHTML = content;
    task.appendChild(ButtonDone(loadTask, id));
    task.appendChild(ButtonRemove(loadTask, id))

    return task;
}