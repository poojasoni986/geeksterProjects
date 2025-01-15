// let decrement = document.querySelector('#decrement')
// let increment = document.querySelector('#increment')
// let data = document.querySelector('#data')
// let reset = document.querySelector('#reset')
// let count = 1;
// increment.addEventListener('click', () => {
//     count++
//     // console.log(count)
//     data.innerText = count
// })
// decrement.addEventListener('click', () => {
//     if (count > 1) { count-- }
//     data.innerText = count
// })
// reset.addEventListener('click', () => {
//     count = 1;
//     data.innerText = count;
// })

// let h1 = document.querySelectorAll(".para");
// h1[1].style.color = "white";
// h1[1].style.backgroundColor = "green";
// h1[1].style.fontSize = "20px";
// h1[2].innerHTML = "Hello World!"
// console.log(h1)


// let navElemnet = document.querySelector('nav')
// console.log(navElemnet.textContent)
// console.log(navElemnet.innerText)
// console.log(navElemnet.innerHTML)

// // let str = "jdbckecireufh vrj"
// // document.querySelector(div)
// // div.innerHTML = `<p>${str}</p>`


// let btn = document.querySelectorAll('#btn1')
// btn.addEventListener('mouseover', function () {
//     alert("button is clicked")
//     console.log(btn)
// });
// console.log(btn)

// let div1 = document.querySelector("#div1")
// div1.addEventListener('mouseleave', function ({
//     alert("dkcn")
// }))
// console.log(div1)

let arr = [4, 8, 10, 12, 14, 78, -4, -5];
const str = "abcde"
arr.sort(function (a, b) {
    return a - b;
});

console.log(arr)

let arrr = [
    { name: "Ashish", score: "1000" },
    { name: "Mohit", score: "200" },
    { name: "Mansi", score: "300" },
    { name: "Abhishek", score: "250" },
    { name: "Yash", score: "150" }
]
arrr.sort(function (a, b) {
    return parseInt(a.score) - parseInt(b.score);
});
console.log(arrr);

const newArr = new Array(10);
console.log(arr.concat(["arr", "break", 'c']));
newArr.fill();
console.log(newArr);

const str2 = "aaaaaa bcda"
console.log(str2.replace("aaaaaa", "bbbbbb"));