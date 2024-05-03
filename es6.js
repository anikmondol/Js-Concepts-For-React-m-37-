const numbers = [10, 22, 40, 20];
const student = {
    name : "Salib Khan",
    age : 32,
    movies : ["king khan", "Dhaka Mastan"]

}

 
// 1. template sting
const about = `My name is ${student.name}.My age of ${student.age}.My id Number ${numbers[2]}.also liked all my movies ${student.movies[1]}`
// console.log(about);


// 2. arrow function

//2.1 no parameter
const getFiftyFive = () => 55;
// console.log(getFiftyFive());

//2.2 single parameter
const addSixtyFive = num => num + 65;
// console.log(addSixtyFive(5));
const isEvent = num => num % 2 === 0;
// console.log(isEvent(2));


// 2.3 multiple parameter
const addThreeNumber = (a, b, c) => a + b + c;
// console.log(addThreeNumber(10, 20, 30));


// 2.4 multiple line function
const doMath = (a, b, c, d) => {
    const result = a + b + c + d;
    return result;
}

// console.log(doMath(10, 20, 30, 40));



//3. spread operator

const numbers1 = [10, 22, 40, 20];


// create a new array from an older array and add an element
const currentNumbers = [...numbers, 2024];


// const newNumber = numbers;
const newNumber = [...numbers];


// numbers.push(100);
// numbers.push(100);
// numbers.push(100);


// console.log(numbers);
// console.log(newNumber);
// console.log(currentNumbers);


// ---------------------

const twoArray = [[numbers1]];

for(let i of twoArray){
    for(let j of i){
       for(let a of j){
        console.log(a);
       }
    }
}