let alarmString = null;

// Select HTML5 Audio element
const alarmAudio = document.getElementById("alarm-audio");

// Select DOM element with create-alarm id
const createAlarm = document.querySelector(".create-alarm");

// Select DOM element of active alarm container
const activeAlarm = document.getElementById("active-alarm");
const clearAlarm = document.getElementById("clear-alarm");

// Select DOM element of active alarm text
const alarmTextContainer = document.getElementById("alarm-text");

const alarmText = (time) => `Alarm set for ${time}`;

// Initialize alarm sound
alarmAudio.src = "http://soundbible.com/grab.php?id=1355&type=mp3";
alarmAudio.load();

// Handle Create Alarm submit
const handleSubmit = (event) => {
    event.preventDefault();
    const { hour, min, zone } = document.forms[0];

    alarmString = getTimeSecondless({
        hours: hour.value,
        minutes: min.value,
        zone: zone.value
    });

    // Reset form after submit
    document.forms[0].reset();

    // Hide create alarm
    createAlarm.style.display = "none";

    // show active alarm with text
    activeAlarm.style.display = "block";
    alarmTextContainer.innerHTML = alarmText(alarmString);
};

const handleClear = () => {
    alarmString = "";
    activeAlarm.style.display = "none";
    createAlarm.style.display = "block";
};

// Trigger handleClear on button click
clearAlarm.addEventListener("click", handleClear);

// Attach submit event to the form
document.forms[0].addEventListener("submit", handleSubmit);

// Function to check if alarm needs to be triggered
const checkAlarm = (timeString) => {
    if (alarmString == timeString) {
        alarmAudio.play();
        alarmString = "";
    }
};

// Function to convert time to string value
const getTimeString = ({ hours, minutes, seconds, zone }) => {
    if (minutes / 10 < 1) {
        minutes = "0" + minutes;
    }

    if (seconds / 10 < 1) {
        seconds = "0" + seconds;
    }

    return `${hours}:${minutes}:${seconds} ${zone}`;
};

const getTimeSecondless = ({ hours, minutes, zone }) => {
    if (minutes / 10 < 1) {
        minutes = "0" + minutes;
    }

    return `${hours}:${minutes} ${zone}`;
};

// Function to display current time on screen
const renderTime = () => {
    let currentTime = document.getElementById("current-time");

    const currentDate = new Date();

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let zone = hours >= 12 ? "PM" : "AM";

    if (hours > 12) {
        hours = hours % 12;
    }
    const timeString = getTimeString({ hours, minutes, seconds, zone });
    const timeSecondless = getTimeSecondless({ hours, minutes, zone });

    checkAlarm(timeSecondless);
    currentTime.innerHTML = timeString;
};

// Update time every second
setInterval(renderTime, 1000);