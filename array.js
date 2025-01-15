// array

let arr = [{ name: "test1", scope: 100 },
{ name: "test2", scope: 100 },
{ name: "test3", scope: 100 },
{ name: "test4", scope: 100 },
{ name: "test4", scope: 100 }

]

// arr.shift();

// arr.splice(1, 3, 1, 2, 3);
// console.log(arr);

arr.unshift({ name: "test6", scope: 100 }); // add in the first
console.log(arr);
let array = arr.slice(1, 3); // give subarray
console.log(array);

//arrays functions

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let size = num.push(5);// all add inbuilt functions can give size of the array
console.log(num, size);

num.push(5); // add element from the last
num.pop(); //delete element from the last
num.unshift(4)// add element from the first
num.shift(); //delete element from the first
num.slice(0, 2) // dont modify existing aaray

let newNum = num.slice(0, 2); // return subarray between indexing
console.log(num, newNum);

let newNum1 = num.splice(2, 5); // 2 -> start from 2 , 5 -> length (it'll delete digits from index 2 counting 5 element from index 2)
console.log(num, newNum1);
console.log(num);



//adding new length
let a1 = [1, 2, 3];
a1.length = 7;
console.log(a1)

//itereating through loop element
let a = [1, 2, 3]
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

// with foreach
let b = [1, 2, 3]
b.forEach(function myfunc(x) {
    console.log(x)
});


//array concatnation
let one = [1, 2, 3, 4]
let two = [5, 6, 7]

let concate = one.concat(two);
console.log(concate)

//toString 
let c = [1, 5, 7]
console.log(c.toString())


//check type of array
console.log(typeof a)