let timer = document.querySelector('#timer')
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let reset = document.querySelector('#reset')

let myTime = {
    hours: "00",
    minutes: "00",
    seconds: "00"
};

let seconds = 0;
let minutes = 0;
let hours = 0;
function stopWatch() {
    seconds += 1;

    if (seconds == 60) {
        seconds = 0;
        minutes += 1;
    }
    if (minutes === 60) {
        minutes = 0;
        hours += 1;
    }
    // Format the time to always display two digits
    myTime.seconds = seconds < 10 ? "0" + seconds : seconds;
    myTime.minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;

    showData();
    console.log(myTime)
}






function showData() {
    timer.innerHTML = `${myTime.hours} : ${myTime.minutes} : ${myTime.seconds}`
}
let timeInterval;
start.addEventListener("click", () => {
    timeInterval = setInterval(stopWatch, 1000)
})
stop.addEventListener("click", () => {
    clearInterval(stopWatch)
})
reset.addEventListener("click", () => {
    clearInterval(stopWatch)
    seconds = 0;
    minutes = 0;
    hours = 0;
    myTime.seconds = "00";
    myTime.minute = "00";
    myTime.hour = "00";
    console.log(myTime)
    showData();
})