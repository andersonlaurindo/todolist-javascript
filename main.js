/*
( () => {
    //IIFE
})()
*/

import { handleNovoItem } from "./components/createTask.js";
import { loadTask } from "./components/loadTask.js";

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click',  handleNovoItem);

loadTask();
