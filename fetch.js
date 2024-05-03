// 1. JSON  ------> stringify, parse

const student = {
    name : "Salib Khan",
    age : 32,
    movies : ["king khan", "Dhaka Mastan"]

}

// console.log(student);

// const studentString = JSON.stringify(student);
// console.log(studentString);


// const studentObj = JSON.parse(studentString);
// console.log(studentObj);



// ------------------------

// 2. fetch

// fetch("url")
// .then(res => res.json())
// .then(data => console.log(data));



// --------------->keys, values


// const keys = Object.keys(student);
// console.log(keys);

// const values = Object.values(student);
// console.log(values);


// --------------------------

const numbers = [10, 22, 40, 20];

// numbers.forEach(element => console.log(element));
const ans = numbers.map(element => element * 2);
// console.log(ans);

// for of on array like object
// for on an object using for in



// -----------------------------

const products = [
    {name: "laptop", price: 32000, brand: "lenovo", color: "silver"},
    {name: "phone", price: 3000, brand: "apple", color: "black"},
    {name: "key-board", price: 1000, brand: "hp", color: "white"},
    {name: "monitor", price: 6000, brand: "Dell", color: "silver"},
    {name: "mouse", price: 2000, brand: "Microsoft", color: "golden"},
]


const pen = {name: "pen", price: 200, brand: "fresh", color: "red"};

// copy products array and then add newProduct
// const newObj = [...products, pen]

// --------------------

// create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = products.filter(element => element.name !== 'phone');
console.log(remaining);
