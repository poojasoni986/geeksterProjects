let hour = document.querySelector('#hour')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')
let ampm = document.querySelector('#ampm')

function updateWatch() {
    const date = new Date()
    let hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    ap = hour >= 12 ? "PM" : "AM"
    console.log(ampm)

    if (hr < 10) {
        hr = "0" + hr;
    } else {
        hr = hr;
    }
    if (min < 10) {
        min = "0" + min;
    } else {
        min = min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    } else {
        sec = sec;
    }


    hour.innerText = hr;
    minutes.innerText = min;
    seconds.innerText = sec;
    ampm.innerText = ap;

}
setInterval(updateWatch, 1000)

updateWatch()