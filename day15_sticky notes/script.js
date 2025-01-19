let btnAdd = document.querySelector('#addNotes')
let btnDelete = document.querySelector('#delete_all')
let textArea = document.querySelector('textarea')
let color = document.querySelector('#color')
let notesContainer = document.querySelector('#notes_container')
let para = document.querySelector('#para')

function createnotes() {
    if (textArea.value == "") {
        alert("Please add some text")
        return
    }

    let notes = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");

    notes.appendChild(p);
    notes.appendChild(cross_btn);

    console.log(notes);

    cross_btn.innerText = "X";
    notes.style.backgroundColor = color.value;
    p.innerText = textArea.value;


    notesContainer.appendChild(notes);
    textArea.value = "";
    // console.log(notesContainer.childElementCount);


    toggleplaceholderVisiblity();
    //delete self
    cross_btn.addEventListener("click", function () {
        // console.log(cross_btn);
        notes.remove();
        toggleplaceholderVisiblity();
    });

}

//alert message on adding any text
btnAdd.addEventListener('click', createnotes)

// for paragraph display when notes are addded 
function toggleplaceholderVisiblity() {
    if (notesContainer.childElementCount > 0) {
        para.style.display = "none";
    }
    else {
        para.style.display = "block";
    }
}


//delete all
btnDelete.addEventListener('click', function () {
    notesContainer.innerHTML = "";
    toggleplaceholderVisiblity();
})

// console.log(btnAdd)
// console.log(btnDelete)
// console.log(textArea.value)
