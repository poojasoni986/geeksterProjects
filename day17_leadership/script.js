let fname = document.querySelector('.fname')
let lname = document.querySelector('.lname')
let country = document.querySelector('.country')
let score = document.querySelector('.score')
let addBtn = document.querySelector('.addBtn')
let section2 = document.querySelector('.section2')
let data = [];
console.log(fname, lname, country, score, addBtn, section2)

function activateButtons() {
    let buttons = document.querySelectorAll(".cards");
    buttons.forEach((button, index) => {
        console.log(button);

        button.addEventListener("click", function (e) {
            console.log(e);

            if (e.target.className === "del") {
                data.splice(index, 1);
                updateDataonUI();
            }
            if (e.target.className === "but1") {
                data[index].score += 5;
                updateDataonUI();
            }
            if (e.target.className === "but2") {
                data[index].score -= 5;
                updateDataonUI();
            }

            if (e.target.className === "edit") {
                editUser(index);
            }

        });
    });
}

function editUser(idx) {
    let user = data[idx]

    let editform = `<div class="edit-form">
            <input type="text" id="editFname" value="${user.fname}" placeholder="First Name" />
            <input type="text" id="editLname" value="${user.lname}" placeholder="Last Name" />
            <input type="text" id="editCountry" value="${user.country}" placeholder="Country" />
            <input type="number" id="editScore" value="${user.score}" placeholder="Score" />
            <button id="saveEdit">Save</button>
            <button id="cancelEdit">Cancel</button>
        </div>`

    //insert the edit form in place of user card
    let cards = document.querySelectorAll('.cards')
    cards[idx].innerHTML = editform
    console.log(cards)

    //save button event listener
    document.querySelector('#saveEdit').addEventListener('click', function () {
        let editedFname = document.querySelector("#editFname").value;
        let editedLname = document.querySelector("#editLname").value;
        let editedCountry = document.querySelector("#editCountry").value;
        let editedScore = parseInt(document.querySelector("#editScore").value);

        //validate inputs
        if (
            editedFname === "" ||
            editedLname === "" ||
            editedCountry === "" ||
            editedScore === ""
        ) {
            alert(" please fill all the fields")
            return
        }

        //update user data
        data[idx] = {
            ...user,
            fname: editedFname,
            lname: editedLname,
            country: editedCountry,
            score: editedScore
        }

        //updateUI
        updateDataonUI()
    })


    //cancel button event 
    document.querySelector('#cancelEdit').addEventListener('click', function () {
        // Re-render the data without saving changes
        updateDataonUI();
    })

}

function getDate() {
    let date = new Date();
    let month = date.toLocaleString("default", { month: "short" })
    let day = date.getDate()
    let year = date.getFullYear()
    let time = date.toLocaleTimeString()
    let finaldate = `${month} ${year} : ${time}`
    return finaldate.toUpperCase();
    // console.log(finaldate)
}
function updateDataonUI() {
    data.sort((p1, p2) => {
        return p2.score - p1.score
    })
    console.log(data)
    let showData = "";

    data.forEach((player) => {
        showData += `
         <div class="cards">
                    <span>${player.fname}</span>
                    <span>${player.lname}</span>
                    <span>${getDate()}</span>
                    <span>${player.country}</span>
                    <span>${player.score}</span>
                    <button class="but1">+5</button>
                    <button class="but2">-5</button>
                    <button class="del">🗑</button>
                    <button class="edit">Edit</button>
                </div>
        `;
    });
    // console.log(data)
    // console.log(showData)
    section2.innerHTML = showData;
    activateButtons();
}



addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
        fname.value === "" |
        lname.value === "" |
        country.value === "" |
        score.value === ""
    ) {
        alert("please fill all the fields")
        return
    }
    else {
        let playerObj = {
            id: Date.now(),
            fname: fname.value,
            lname: lname.value,
            country: country.value,
            score: parseInt(score.value)
        }
        data.push(playerObj)
        // console.log(data)
        updateDataonUI()
        fname.value = ""
        lname.value = ""
        country.value = ""
        score.value = ""
    }
})


