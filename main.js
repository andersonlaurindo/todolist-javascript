/*
( () => {
    //IIFE
})()
*/

import ButtonDone from "./components/finishTask.js";
import ButtonRemove from "./components/removeTask.js";

const createTask = (event) => {
    event.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    
    const task = document.createElement('li');
    task.classList.add('task');
    const content = `<p class="content">${valor}</p>`; 

    task.innerHTML = content;
    task.appendChild(ButtonDone());
    task.appendChild(ButtonRemove())
    list.appendChild(task);
    input.value = "";
}

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click',  createTask);

