const myBirthday = '07 June 2024';
const daysEl = document.getElementById('days-element');
const hoursEl = document.getElementById('hours-element');
const minutesEl = document.getElementById('minutes-element');
const secondsEl = document.getElementById('seconds-element');

function countdown(){
    const currentDate = new Date();
    const birthday = new Date(myBirthday);
    const totalSeconds = (birthday - currentDate) / 1000;
    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds/ 3600) % 24;
    let minutes = Math.floor(totalSeconds/ 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds
    

    
}

setInterval(countdown, 1000);

countdown();