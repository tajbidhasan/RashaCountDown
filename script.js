const endDate = new Date("2023-11-01T00:00:00");
let now = new Date("2023-10-23T13:15:00"); // This is just for initial setup

const daysElem = document.getElementById("days");
const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");

function updateCountdown() {
    now = new Date();

    const totalSeconds = (endDate - now) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysElem.textContent = days;
    hoursElem.textContent = hours;
    minutesElem.textContent = minutes;
    secondsElem.textContent = seconds;
}

setInterval(updateCountdown, 1000);
