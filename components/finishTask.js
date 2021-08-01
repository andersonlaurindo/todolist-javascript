const finishTask = (loadTask, id) => {
    const tasksRegistereds = JSON.parse(localStorage.getItem('tasks'));
    tasksRegistereds[id].finished = !tasksRegistereds[id].finished; 

    localStorage.setItem("tasks", JSON.stringify(tasksRegistereds));

    loadTask();

/*  const buttonDone = event.target;
    const taskDone = buttonDone.parentElement;
    taskDone.classList.toggle('done');*/
}

const ButtonDone = (loadTask, id) => {
    const buttonDone = document.createElement('button');

    buttonDone.classList.add('check-button');
    buttonDone.innerText = 'done';
    buttonDone.addEventListener('click', () => finishTask(loadTask, id));

    return buttonDone;
}

export default ButtonDone;