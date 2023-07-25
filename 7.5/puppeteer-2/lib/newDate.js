//let daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
//const date = new Date();
//let dateString = daysOfWeek[date.getDay()] + " " + date.getDate();
//const ticketDate = new Date(dateString);
//const newTicketDate = ticketDate.setDate(ticketDate.getDate() + 3).toString();

const date = new Date();
const ticketDate = date.setDate(date.getDate() + 3).toString();

module.exports = { ticketDate };
