// Create a variable called firstVariable.
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number.
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// What is the value of firstVariable?
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.

let firstVariable; 
firstVariable = "Hello World";
firstVariable = 342;
let secondVariable = firstVariable;
secondVariable = "Change to any string";
console.log(firstVariable);
let yourName = "Parsa Chowdhury";
console.log(`Hello, my name is ${yourName}`);


const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// console.log(a __ b);
// console.log(c __ d);
// console.log('Name' __ 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true __ false);
// console.log(false __ false __ false __ false __ false __ true);
// console.log(false __ false)
// console.log(e ___ 'Kevin');
// console.log(a __ b ___ c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)
// console.log(a __ a ___ d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 __ '48');

console.log(a !== b);
console.log(c !== d);
console.log("Name" === "Name");
console.log(true || false);
//returns the 1st true statement
console.log(false || false || false || false || false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a+b===c);
console.log(a*a===d);
console.log(48 !== '48');


// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

let animal = "pig";
if(animal === "cow"){
    console.log("mooooo");
}else{
    console.log("Hey! You're not a cow.")
};