// ArrayList < Interger > a = new ArrayList < Interger > ();

// a.add(0);
// a.add(1);
// a.add(2, "as");


const user = {}

user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

console.log(user);


//2nd ques
let schedule = {}

const isEmpty()

schedule[8: 30]="get up"
alert(sc)


//3rd
const getsum = (obj) => {

    if (isEmpty(obj)) {
        return 0;
    }

    let sum = 0;
    for (const key in obj) {
        sum += obj[key];
    }
    return sum;
}
console.log(getsum(salaries))
//console.log(getsum({}))


//4th 
// const input = prompt("type the input");
// console.log()

let calculator = {
    read: function () {
        const a_ = prompt("enter a value");
        const b_ = prompt("enter value for b");

        this.a = a_;
        this.b = b_;
    },
    sum: function () {
        return parseInt(calculator.a) + parseInt(calculator.b);
    },
    mul: function () {
        return calculator.a * calculator.b;
    }


}
console.log(calculator.read();)
console.log(calculator.sum();)
console.log(calculator.mul();)