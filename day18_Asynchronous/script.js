
//synchronus javascript -> until/unless our request 1 is not complete, request 2 cant be start processing 
console.log('starting')

function func1() {
    console.log("fn1 is started..")
    for (let i = 0; i < 1000000000; i++) {

    }
    console.log("fn1 ended")
}

function func2() {
    console.log("fn2 is started..")
    for (let i = 0; i < 10000000; i++) {

    }
    console.log("fn2 ended")
}

func1();
func2();
console.log("ended")


//callback functions -> it tells us which request is complete or failure  
//set timeout -> run once 
setTimeout(() => {
    console.log("f1 is done")
}, 3000)

//set interval -> run till condition is fufill in given time delays
let i = 1;
setInterval(() => {
    console.log("f2 is done", i++)
}, 1000)