const removeTask = (loadTask, id) => {
    const tasksRegistereds = JSON.parse(localStorage.getItem('tasks'));
    
    tasksRegistereds.splice(id, 1);

    localStorage.setItem("tasks", JSON.stringify(tasksRegistereds));

    loadTask();

/*  
    const buttonRemove = event.target;
    const taskDone = buttonRemove.parentElement;
    taskDone.remove();
*/

    return buttonRemove;
}

const ButtonRemove = (loadTask, id) => {
    const buttonRemove = document.createElement('button');

    buttonRemove.classList.add('delete-button');
    buttonRemove.innerText = 'remove'
    buttonRemove.addEventListener('click', () => removeTask(loadTask, id))

    return buttonRemove;
}

export default ButtonRemove;