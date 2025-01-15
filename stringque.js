//rest opertaor
function sum(a, b, ...args) {
    console.log(a, b, args);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)

//get first letter from every word and return a string
let str = "my name is pooja soni";
let stringArr = str.split(" ");
let stringChar = stringArr.map(function (word) {
    return word[0];
})
let stringJoin = stringChar.join("");

console.log(stringJoin);

//get lower index, higher index and their difference 
let input = [
    { name: 'test', age: 13 },
    { name: 'test', age: 14 },
    { name: 'test', age: 15 },
    { name: 'test', age: 16 },
    { name: 'test3', age: 18 },
]
let ages = input.map((person) => person.age)
let result = [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
console.log(result)


//
let str1 = "every developer likes to mix nodejs and reactjs";
function abbrevation(word) {
    return word[0] + (word.length - 2) + word[word.length - 1]
}
let stringArr1 = str1.split(" ");
let stringChar1 = stringArr1.map(function (word) {
    if (word.length > 3) {
        return abbrevation(word);
    }
    return word;
})
let result1 = stringChar1.join(" ");

console.log(result1);

//factorial n
function factorial(n) {
    if (n < 0) {
        return "negative nubers"
    }
    let resultfact = 1;
    for (let i = 1; i <= n; i++) {
        resultfact *= i;
    }
    return resultfact
}
console.log(factorial(5))


//print number of keys present in object
// let obj = {};
// console.log(obj);

const input1 = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["a", "e", "c"],
    ["d", "f", "f"],
];
let ans = {};
for (let i = 0; i < input1.length; i++) {
    for (let j = 0; j < input1[i].length; j++) {
        // console.log(input[i][j] + " ")
        const key = input1[i][j];
        if (ans[key]) {
            ans[key] += 1;
        }
        else {
            ans[key] = 1
        }
    }
}
console.log(ans);

// input1.flat().map()


// const input2 =[
//     {
//     name:'bob',
//     score: [20,60,70]
//     },
//     {
//     name:'bob',
//     score: [50,40,90]
//     },
//     {
//     name:'bob',
//     score: [50,60,70]
//     },

// ]
// input2.map((obj)=>{
//     const avgObj={name: obj.name, avg}

// });

const company = new Map([
    ["name", "GFG"],
    ["no_of_employee", 200],
    ["category", "education"]
]);
function print(key, values) {
    console.log(values + "=>" + key);
}
company.forEach(print);