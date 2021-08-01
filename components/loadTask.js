import { removeDatesRepeated, sortDates } from "../services/date.js";
import { createDate } from "./createDate.js";

export const loadTask = () => {
    const list = document.querySelector('[data-list]');

    const tasksRegistereds = JSON.parse(localStorage.getItem('tasks')) || [];

    list.innerHTML = " ";
    const datesUniques = removeDatesRepeated(tasksRegistereds);
    sortDates(datesUniques);

    datesUniques.forEach((day) => {
        list.appendChild(createDate(day));
    });
};