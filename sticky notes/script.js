let btn = document.querySelector('button')
console.log(btn)

let textArea = document.querySelector('textarea')
console.log(textArea.value)
function createnotes() {
    if (textArea == " ") {
        alert(" please enter some text")
        return
    }

    div.appendChild(p)
    div.appendChild(button)

    p.innerText = textArea.value
}
btn.addEventListener('click', createnotes)