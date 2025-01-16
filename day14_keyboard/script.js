let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let text = document.querySelector('#text')

document.addEventListener('keydown', (e) => {

    console.log(e)
    let keypressed = e.key
    let keyCode = e.
        text.innerHTML = `you pressed ${keypressed}`;
    box2.innerHTML = `key code id ${keyCode}`
    document.body.appendChild(box2)
})

