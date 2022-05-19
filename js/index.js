const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
let diff;
let finalDate;
let intervalID;

if (localStorage.getItem("timer")) {
    finalDate = localStorage.getItem("timer");
    intervalID = setInterval(interval, 1000);
}

function start() {
    const date = document.querySelector("input").value;
    finalDate = new Date(date).getTime();
    localStorage.setItem("timer", finalDate);
    intervalID = setInterval(interval, 1000);
}

function interval() {
    let now = new Date().getTime();
    diff = finalDate - now;

    const days = Math.floor(diff / day);
    const hours = Math.floor((diff % day) / hour) + 3;
    const minutes = Math.floor((diff % hour) / minute);
    const seconds = Math.floor((diff % minute) / second);

    document.querySelector(
        "h1"
    ).innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s`;
}

function stop() {
    document.querySelector("h1").innerText = "😉";
    clearInterval(intervalID);
    localStorage.removeItem("timer");
}