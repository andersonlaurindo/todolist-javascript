const ButtonDone = () => {
    const buttonDone = document.createElement('button');

    buttonDone.classList.add('check-button');
    buttonDone.innerText = 'done';
    buttonDone.addEventListener('click', finishTask);

    return buttonDone;
}

const finishTask = (event) => {
    const buttonDone = event.target;
    const taskDone = buttonDone.parentElement;

    taskDone.classList.toggle('done');
}

export default ButtonDone;