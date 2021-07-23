const ButtonRemove = () => {
    const buttonRemove = document.createElement('button');

    buttonRemove.classList.add('delete-button');
    buttonRemove.innerText = 'remove'
    buttonRemove.addEventListener('click', removeTask)

    return buttonRemove;
}

const removeTask = (event) => {
    const buttonRemove = event.target;
    const taskDone = buttonRemove.parentElement;
    taskDone.remove();

    return buttonRemove;
}

export default ButtonRemove;