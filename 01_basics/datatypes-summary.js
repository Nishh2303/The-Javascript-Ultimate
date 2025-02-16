// primitive

// 7 types => string, number, boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.23;

const isLoggedIn = false;
const outsideTemprature = null;

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 298742376277777n

// Reference (non primitive)

// array, objects, function

const hero = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name : "Nisarg",
    age : 18
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof anotherId);
