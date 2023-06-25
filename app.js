// B. Create a variable called firstVariable.
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

//C. console.log(a __ b);
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

// E. Driver's Ed
// Make a variable that holds a person's age. Be semantic.
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let age = 36;
if(age >= 16){
    console.log("Here are the keys!")
}else {
    console.log("Sorry, you're too young.")
};

//II LOOPS
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive.
// Write a loop that will print out all the numbers from 10 up to and including 400.
// Write a loop that will print out every third number starting with 11 and going no higher than 4000.

for (let i=0;i<=10;i++){
    console.log(i)};
for (let i=10;i<=400;i++){
    console.log(i)};
for (let i=11;i<=4000;i+=3){
    console.log(i)};

// B. Get even
// Print out the numbers that are within the range of 1 - 100. 
// Adjust your code to add a message next to even numbers only 
// that says: "<-- is an even number".

for (let i=1;i<100;i++){
    if(i%2 == 0){
        console.log(i + "<-- is an even number");
    }else {console.log(i)}
};
    