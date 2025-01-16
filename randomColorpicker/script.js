let main = document.getElementById('main-container')
for (let i = 0; i < 36; i++) {
    let singleDiv = document.createElement('div')
    main.appendChild(singleDiv)
    let rColor = randomColor();
    singleDiv.innerText = rColor;
    singleDiv.style.backgroundColor = rColor;
    console.log(singleDiv)
}


function randomColor() {
    let chars = "0123456789abcdef"
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16)
        color = color + chars[randomIndex]
        console.log(color)
    }
    return color
}
