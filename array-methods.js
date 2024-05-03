const products = [
    {name: "laptop", price: 32000, brand: "lenovo", color: "silver"},
    {name: "phone", price: 3000, brand: "apple", color: "black"},
    {name: "key-board", price: 1000, brand: "hp", color: "white"},
    {name: "monitor", price: 6000, brand: "Dell", color: "silver"},
    {name: "mouse", price: 2000, brand: "Microsoft", color: "golden"},
]


// console.log(products);


//------>1. map methods
// const brandName = products.map(product => product.brand);
// console.log(brandName);
// const price = products.map(product => product.price);
// console.log(price);


//-------->2. forEach methods
// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.name))


// forEach multi line 
products.forEach(element => {

})


//---------->3. filleter
// const cheap = products.filter(element => element.price <= 5000);
// // console.log(cheap);

// const specificName = products.filter(element => element.name.includes('a'));
// console.log(specificName);


// ------->4. find
const special = products.find(product => product.color === "silver");
// console.log(special);



// --------->5. reduce
const avg = products.reduce((c, p) =>{
    const sum = c + p.price;
    const result = sum / products.length;
    return result;
},0);


console.log(avg);