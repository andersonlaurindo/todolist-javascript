export const removeDatesRepeated = (dates) => {

    const datesUniques = [];
    dates.forEach(date => {
        if(datesUniques.indexOf(date.dateHandled) === -1){
            datesUniques.push(date.dateHandled);
        }
    });
    return datesUniques;
}

export const sortDates = (dates) => {
    dates.sort((dateA, dateB) => {
        const firstDate = moment(dateA, 'DD/MM/YYYY').format('YYYYMMDD');
        const secondDate = moment(dateB, 'DD/MM/YYYY').format('YYYYMMDD');
        return firstDate - secondDate;
    })

}