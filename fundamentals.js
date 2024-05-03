//1. How to declare a variable using let and const
const fatherName = "Arnold";
let season = "Winter";
season = "rainy";



// 2. condition
// 6 basic condition: >, <, >=, <=, ===, !==
// multiple condition: &&, || 
if(fatherName === "arnold"){

}else if(fatherName === "Arnold"){

}else{

}

// 3. array
// index
// length, push
const numbers = [10, 20, 33, 88];
numbers[0] = 410;


// 4. loop;
// 4.1 for loop
for(let i = 0; i <numbers.length; i++){
    // console.log(numbers[i]);
}

// 4.2 while loop
// let i = 0;
// while(i < numbers.length){
//     // console.log(numbers[i]);
//     i++;
// }

// 5. function 
function multiply(a, b){
    const result = a * b;
    return result;
}

const output = multiply(10, 20);
// console.log(output);


//6. object
// 3 ways to access property by name
const student = {
    name : "anik",
    class : 12,
    age : 24,
    language: ["html", "css", "js"]
}


const myVariable = "language"
console.log(student.name); // direct by property
console.log(student["age"]); // access via property name string
console.log(student[myVariable]); // access via property name in a variable


