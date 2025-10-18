let name = "Ini";

console.log("Congrats to " + name);

let x = 1;
console.log(x + 2);
console.log(x * 9);

let myName = "Ini";
let myAge = 27;
let isCoder = true; // BOOLEAN

console.log(typeof myName);
console.log(typeof myAge);
4;
console.log(typeof isCoder);

// Testimony asked a question

let myFriend;

console.log("The type of myfriend is " + typeof myFriend);
console.log(myName);
myName = null;
console.log(myName);

// let or const Variable declaration
let ourNumber = 5;
ourNumber = "Six"; // Dynamic Typing: Types change
console.log(ourNumber);

const ourTutor = "Ini";
console.log("Our Tutor is " + ourTutor);

// Objects
// Store related data
let student = {
  name: "Testimony Subair",
  age: 17,
  gender: "Male",
  hobby: "Playing Games",
  dob: "01-02-2008",
};

console.log("The student age is " + student.age);
student.name = "Marvelous";
console.log("The student name is " + student.name);

// Arrays
// Group of Values
let whatTestimonyEats = [
  "Rice and Stew",
  "Bread and Tea",
  "Ice Cream and Meat Pie",
  "Indomie",
];

console.log("Testimony ate " + whatTestimonyEats[0] + " first.");
console.log("Testimony ate " + whatTestimonyEats[2] + " third.");
console.log("Testimony ate " + whatTestimonyEats[3] + " last.");

// Functions
// Perform Function
function greet(name) {
  let firstWord = "Good";
  let secondWord = " day to ";
  console.log(firstWord + secondWord + name);
}

greet("Tise");

// Calculate
const greeting = (name) => console.log("Good morning to " + name);
greeting("Ini");

const add = (a, b) => a + b; // Another way to write functions

console.log("The addition of 300 and 400 is " + add(300, 400));

// Function Example
function getTiseAge(dateOfBirth) {
  let thisYear = 2025;
  let dobYear = dateOfBirth;
  let age = thisYear - dobYear;
  console.log("Tise's age is " + age);
}

getTiseAge(2003);

const substract = (x, y) => y - x;

console.log(substract(12, 24));

// Arithmetic Operators or Symbols in Javascript
/// + = Addition
/// - = Subtraction
/// * = Multiplication
/// / = Division
/// % = Modulus

let firstNumber = 3;
let secondNumber = 2;
console.log("The modulus of 3 and 2 is " + (firstNumber % secondNumber));

// ** = Exponential
let number = 2;
let power = 3;
console.log("2 raised to the power of 3 is " + number ** power);

// ++ = Increment
let thisNumber = 10;
let increment = ++thisNumber;
console.log("The increment on thisNumber is " + increment);

// -- = Decrement
let thatNumber = 20;
let decrement = --thatNumber;
console.log("The decrement on thatNumber is " + decrement);

// Comparison Operators or Symbols
/// > = Greater Than
/// < = Less Than
let anotherNumber = 4;
let thisotherNumber = 5;
let someOtherNumber = 4;
console.log(anotherNumber < thisotherNumber);
console.log(anotherNumber > thisotherNumber);

/// === = Equals to (Strict)
console.log(anotherNumber === someOtherNumber);
// == = Equals to (Loose)
console.log(anotherNumber == "4");
console.log(anotherNumber === "4");
// != = Not Equals to (Loose)
// !== = Not Equals to (Strict)
console.log(thisotherNumber != "5");

// >= = Greater than or equals to
// <= = Less than or equals to
console.log(anotherNumber >= thisotherNumber);
console.log(anotherNumber <= thisotherNumber);

// Asignment Symbols or Operator

/// = = Assign Symbol
let tiseName = "Tise";
// += = Add and Assign
let myNumber = 2;
myNumber += 2;
console.log(myNumber);
// -= = Subtract and Assign
myNumber -= 3;
console.log(myNumber);
// *= = Multiply and Assign
myNumber *= 10;
console.log(myNumber);
myNumber /= 2;
console.log(myNumber);
myNumber %= 2;
console.log(myNumber);

// Logical Operators
/// && = AND Operator
console.log((4 === 4) && (5 === 5));
// The left side is TRUE while the Right side is TRUE
// So TRUE && TRUE = TRUE

console.log((4 === 4) && (5 === 4));

/// || = OR Operator
console.log((4 === 4) || (5 === 5));
console.log((4 === 4) || (5 === 4));
console.log((4 === 3) || (5 === 4));

// ! = NOT Operator
let myStory = true;
let yourStory = false;
console.log(!myStory);
console.log(!(myStory || yourStory));

// String Operator
/// Inside string, + means Concatenation
console.log("Hello " + "Marvelous" + ", How are you doing?"); 

// Operators or Symbols

// 1. Arithmetic
// 2. Comparison
// 3. Assignment
// 4. Logical
// 5. String = Concatenation


