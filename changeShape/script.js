let round = document.querySelector(".round");
let square = document.querySelector(".square")
let btnChangeColor = document.querySelector("#changeColor")
let btnChangeShape = document.querySelector("#changeShape")

//change random color
function randomcolor() {
    return Math.floor(Math.random() * 255);
}
btnChangeColor.addEventListener('click', () => {
    round.style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})
console.log(round);


//change random shape
function randomShape() {
    return arr[Math.floor(Math.random() * arr.length)]
}
let arr = ['square', 'round', 'diamond', 'triangle', 'arrow', 'frame', 'star', 'cross', 'left-point', 'right-point', 'parallal', 'cheg']
btnChangeShape.addEventListener('click', () => {
    square.className = "square"
    const newShape = randomShape();
    square.classList.add(newShape)
    console.log(square)
})

// function randomShape() {
//     let idx = arr[Math.floor(Math.random() * arr.length)]
//     return arr[idx]
// }
function changeShape() {
    let shapeName = randomShape()
    square.id = shapeName
}
// console.log(arr[idx])

// console.log(square)