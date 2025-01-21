let timer = document.querySelector('#timer')
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let reset = document.querySelector('#reset')

let myTime = {
    hour: "00",
    minute: "00",
    seconds: "00"

};

let seconds = 0;
function stopWatch() {
    seconds += 1;
    if (seconds < 60) {
        myTime.seconds = seconds;
        console.log(myTime)
    }
    else {

    }
}






function showData() {

}
let timeInterval
start.addEventListener("click", () => {
    timeInterval = setInterval(stopWatch, 1000)
})
stop.addEventListener("click", () => {
    clearInterval(stopWatch)
})
reset.addEventListener("click", () => {
    clearInterval(stopWatch)
    myTime.seconds = 0;
    myTime.minute = 0;
    myTime.hour = 0;
    console.log(myTime)
    showData();
})