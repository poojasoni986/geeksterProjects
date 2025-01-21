let rating = document.querySelectorAll('.rating')
let btn = document.querySelector('#btn')
let container = document.querySelector('#container')

let selected = ""

rating.forEach((rating) => {
    rating.addEventListener('click', (e) => {
        removeActive()
        selected = e.target.innerText || e.target.parentNode.innerText;
        e.target.classList.add("active");
        e.target.parentNode.classList.add("active");
        console.log(selected)
    })
})


function removeActive() {
    rating.forEach((rat) => {
        rat.classList.remove("active")
        console.log(rating)
    })
}
btn.addEventListener('click', function () {
    if (selected !== "") {
        container.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selected}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }
    else {
        alert("please give feedback")
    }
    console.log(selected)
})

