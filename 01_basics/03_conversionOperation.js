let score = "23abc" //is not a pure number

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) // how to change datatype
console.log(typeof valueInNumber)
console.log(valueInNumber)

// if score is null => output is 0
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn);

// " " => false
// "Nisarg" => true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);
