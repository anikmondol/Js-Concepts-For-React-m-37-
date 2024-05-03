// array destructuring
const numbers = [42, 65];

// const x = numbers[0];
// const y = numbers[1];

const [x, y] = [42, 65];
const [first, second] = numbers;


// console.log(x, y);
// console.log(first, second);

// ---------------------


function getValue(a, b){
    const numS = [a, b];
    return numS;
}

// console.log(getValue(11, 22));

// const [num1, num2] = [11, 22];
// const [num1, num2] = getValue(11, 22);


// console.log(num1, num2);



// --------------------------

const student = {
    name : "Salib Khan",
    age : 32,
    movies : ["king khan", "Dhaka Mastan"]

}

// const [firstMovie, secondMovie] =  ["king khan", "Dhaka Mastan"];
// console.log(firstMovie, secondMovie);


// const [firstMovie, secondMovie] =  student.movies;
// console.log(firstMovie, secondMovie);



// object destructing

const {name, age} = {name: "alu", age: 14};
// console.log(id);


const employee = {
    ide: "VS Code",
    designation: "developer",
    machine: "mac",
    languages: ['html', "css", "js"],
    specification: {
       height: 66,
       weight: 53,
       address: "Dhaka",
       drink: "water",
       watch:{
        color: "black",
        price: 5000,
        brand: "garmin"
       }
    }
}

const {machine, ide} = employee;
const {weight, address} = employee.specification;
const {brand} = employee?.specification?.watch;
console.log(brand);