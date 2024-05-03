//falsy-------> "", 0, false, null, undefined, NaN
//truthy-------> true, "string", [], {},.....other

// check truthy/false  -------->console.log(!!value);


// check truthy
let myVar = 120;
// if(myVar){
//     myVar *= 100
// }else{
//     myVar = 0;
// }


// check negative or falsy anything
// let myMoney = 50;
// if(!!myMoney){

// }


// ----------------------->ternary operator

let money = 20;
// let food;

// if(money > 100){
//     food = "biryani";
// }else{
//     food = "tea"
// }

// console.log(food);

// let money = 100;
// const food = money < 50 ? "biryani" : "tea";
// console.log(food);

let drink = (money > 100 && myVar > 100) ? true : false; 
// console.log(drink);


// ------------------


const num1 = 1;
// console.log(num1);

const numString = num1 + ""; //convert to string
// console.log(numString);

const numNumber = +numString; // convert to number
// console.log(numNumber);

// -----------------

const isActive = false;
const showUser = () => console.log("display User");
const hideUser = () => console.log("hide User");

// isActive ? showUser() : hideUser();
isActive && showUser(); // use && if the left side is true then right side will be execute 
isActive || hideUser(); // use || if the left side is false then right side will be executed


// toggle boolean
isActive = !isActive;