const name = "Nisarg"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Nisarg-np-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice (0, gameName.length)
console.log(anotherString);

const newStringOne = "   Nisarg    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://nisarg.com/nisarg%20panchal"
console.log(url.replace('%20','$'));

console.log(url.includes('sundar')); // false

console.log(gameName.split('$'));