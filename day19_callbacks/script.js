
//callback -> a function is passed to another func to execute after an asynchronous opertaion completes 
const mainfunction = (cb) => {
    setTimeout(() => {
        cb([2, 3, 4]);
    }, 2000)
    console.log(cb)
}

const add = (array) => {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    console.log(sum)
}

mainfunction(add)