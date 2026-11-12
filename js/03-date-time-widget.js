
const dateContainer = document.querySelector(".date-container");
const hoursContainer = document.querySelector(".hours");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");

const weekDays = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
];

const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function updateClock() {

    const today = new Date();

    let date = today.getDate();
    let day = weekDays[today.getDay()];
    let month = monthNames[today.getMonth()];

    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    // Update date
    dateContainer.innerHTML = `
        <p>${day}</p>
        <p><span>${date}</span></p>
        <p>${month}</p>
    `;

    // Update time
    hoursContainer.textContent = hours + ":";
    minutesContainer.textContent = minutes + ":";
    secondsContainer.textContent = seconds;
}

// Execute immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);
