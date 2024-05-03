// const money = 200;
// let food;

// if(money === 200){
//     food = "apple"
// }else if(money === 300){
//     food = "ege"
// }else{
//     console.log("ajkeay kico khbar nai");
// }

// console.log(food);

// --------------------

// const mark = 70;

// if(mark >= 80 && mark <= 100){
//     console.log("A+");
// }else if(mark >= 70 && mark <= 79){
//     console.log("A");
// }else if(mark >= 60 && mark <= 69){
//     console.log("B");
// }else if(mark >= 50 && mark <= 59){
//     console.log("C");
// }else if(mark >= 40 && mark <= 49){
//     console.log("D");
// }else{
//     console.log("F");
// }

// --------------------

// const numbers = [11, 30, 44, 70];
// const numbers1 = [11, 30, 44, 70];

// const addTwo = numbers.join(numbers1);
// const add = numbers.concat(numbers1)
// console.log(add);

// console.log(numbers.length);
// numbers.push("anik");
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// console.log(numbers.includes(44));
// console.log(Array.isArray(numbers));
// const cut = numbers.slice(0, 3);
// console.log(cut);
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 2, 'Feb');
// console.log(months);
// numbers.unshift("anik");
// numbers.shift()
// console.log(numbers);
// const add = numbers.reduce((c, p) => {
//     const sum = c + p;
//     return sum
// }, 0)

// console.log(add);

// -----------------------------

// const names = ["anik", "arpon", "apu"];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }


// const myName = "anik Mondal";

// for(let n of myName){
//     console.log(n);
// }

// let i = 0; 
// while(i < myName.length){
//     console.log(myName[i]);
//     i++;
// }


// const person = {
//     name : "anik",
//     age : 24,
//     class : 12
// }


// for(let n in person){
//     console.log(`key = ${n}, value = ${person[n]}`);
// }


// --------------------------

// function addTwo(a, b){
//     const sum = a + b;
//     return sum;
// }

// const outPut = addTwo(10, 20);
// console.log(outPut);


// ---------------------------------

// const person = {
//     name : "anik",
//     age : 24,
//     language : ["html", "css", "js", "python"],
//     address: {
//         village : "shoveRiay",
//         than : "Nawabganj",
//         district : "Dhaka",
//         home : {
//             color : "black",
//             width: "120ft"
//         }
//     },
//     eduction: "ssc"
// }

// console.log(person?.language[2]);
// console.log(person.address);
// console.log(person?.address?.home);
// console.log(person?.address?.home?.color);

// ---------------------

// const string = "My String is ";
// const collegeName = "simt"

// console.log(string.length);
// console.log(string.includes(" "));
// console.log(string.indexOf("s"));
// console.log(string.lastIndexOf("s"));
// console.log(string.toLowerCase());
// console.log(string.toUpperCase());
// const str = string.substring(0, 12);
// console.log(str);
// const ans = string.concat(collegeName);

// console.log(ans);


// ------------------------------------

// let num = "2024";
// let num = "hdg";

// if(isNaN(num)){
//     console.log(true);
// }else{
//     console.log(false);
// }

// ---------------------------

// let a = null;

// if(a === null){
//     console.log(true);
// }else{
//     console.log(false);
// }


// let value = 0;

// if(typeof value === "undefined"){
//     console.log("The vale is undefined");
// }else{
//     console.log("The value is not undefined");
// }


// const number = parseInt(num);
// console.log(number);

// const number1 = parseFloat(num);
// console.log(number1);

// if(num % 2 === 0){
//     console.log(true);
// }else{
//     console.log(false);
// }

// ---------------------------------

// const person = {
//     name : "anik",
//     age : 24,
//     language : ["html", "css", "js", "python"],
//     address: {
//         village : "shoveRiay",
//         than : "Nawabganj",
//         district : "Dhaka",
//         home : {
//             color : "black",
//             width: "120ft"
//         }
//     },
//     eduction: "ssc"
// }


// const string = `My name is ${person.name}.my home district is ${person?.address?.district}.I am learning ${person.language[3]}`;
// console.log(string);



// ------------------------------------

// const personName = ["anik", "apu", "Joy"];
// const allName = ["shove",...personName, "arpon"];

// // console.log(personName);
// // console.log(allName);

// const special = personName.filter(name => name !== "anik");

// console.log(special);


// -----------------------

// const Pi = () => Math.PI;
// console.log(Pi());

// const mulply = num => num * 12;
// console.log(mulply(2));

// const twoPra = (a, b) => (a + b) / 4;
// console.log(twoPra(4, 4));


// const maltyLine = (a, b, c, d) => {
//     const avg = ((a + 5) + (b + 5) + (c + 5) + (d + 5)) / 4;
//     return avg;
// }

// const outPut = maltyLine(5, 5, 5, 5);
// console.log(outPut);


// --------------------------

// const person = {
//     name : "anik",
//     age : 24,
//     language : ["html", "css", "js", "python"],
//     address: {
//         village : "shoveRiay",
//         than : "Nawabganj",
//         district : "Dhaka",
//         home : {
//             color : "black",
//             width: "120ft"
//         }
//     },
//     eduction: "ssc"
// }


// const {village, than, district, home} = person.address;
// const {color, width} = person.address.home;

// console.log(color);

// -----------------------------

// const addThree = (a, b, c ) =>{
//     const sum = a + b + c;
//     return sum
// }

// const outPut = addThree(10, 20);
// console.log(outPut);


// --------------------------

// const number = [21, 44, 78, 22];

// const ans = Math.min(...number);
// const ans1 = Math.max(...number);
// console.log(ans);
// console.log(ans1);