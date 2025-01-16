let round = document.querySelector(".round");
let shape = document.querySelector("#square")
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
btnChangeShape.addEventListener("click", changeShape);
let arr = ["square", "round", "diamond", "triangle", "arrow", "frame", "star", "cross", "left-point", "right-point", "parallal", "cheg"];

function randomShape() {
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function changeShape() {
    let idname = randomShape();
    shape.id = idname;
}
// function randomShape() {
//     let idx = arr[Math.floor(Math.random() * arr.length)]
//     return arr[idx]
// }
// function changeShape() {
//     let shapeName = randomShape()
//     square.id = shapeName
// }
// console.log(arr[idx])

// console.log(square)