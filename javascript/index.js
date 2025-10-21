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

greet("Tise"); // Calling the function

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

// Operators

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
console.log(4 === 4 && 5 === 5);
// The left side is TRUE while the Right side is TRUE
// So TRUE && TRUE = TRUE

console.log(4 === 4 && 5 === 4);

/// || = OR Operator
console.log(4 === 4 || 5 === 5);
console.log(4 === 4 || 5 === 4);
console.log(4 === 3 || 5 === 4);

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

// Conditionals
// Loops

// Conditionals
// Conditionals let your code make decisions based on certain conditions

// 1. If
// 2. Else
// 3. Else if

// Example: Voting age
let age = 16;

if (age >= 18) {
  console.log("Marvelous can vote.");
} else if (age >= 16) {
  console.log("Marvelous can get into the higher institution.");
} else {
  console.log("Marvelous is too young.");
}

// Ternary Operator (Short Form for if-else)
let message = age >= 18 ? "Adult" : "Minor";
console.log(message);

// Nesting Ternary Operator: Go and do some research

// Switch Statement
// This is useful when comparing the same variable against multiple values.
let color = "green";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get Ready!");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Invalid Color");
}

// Loops (Repetitions)
// Loops lets your code repeat actions multiple times

// For Loop

// for (initialization, stopping function, action)
for (let i = 1; i < 5; i++) {
  console.log("Count: " + i);
}

// While Loop
let j = 2;
while (j < 6) {
  console.log("While Count: " + j);
  j++;
}

// Do While
let k = 1;
do {
  console.log("Do-While Count:" + k);
  k++;
} while (k <= 5);

// For In (For Objects)
let user = { name: "Pelola", age: 21 };

for (let key in user) {
  console.log(key, ":", user[key]);
}

// 1. Logic
// Even or Odd

let a = 7;
if (a % 2 === 0) {
  console.log("A is an even number");
} else {
  console.log("A is an odd number");
}

// 2. Multiplications Table
for (let i = 1; i <= 12; i++) {
  console.log("2 times " + i + " is " + 2 * i);
}

// 3. Check if number is negative of positive
let z = -5;

if (z > 0) {
  console.log("Z is a positive number");
} else {
  console.log("Z is a negative number");
}

// 4. Largest of 3 numbers
let u = 100;
let v = 200;
let w = 300;

// Log the largest of the three numbers
if (w > u && w > v) {
  console.log("W is the largest number");
} else if (v > u && v > w) {
  console.log("V is the largest number");
} else {
  console.log("U is the largest number");
}

// 5. Sum of the first N numbers
let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log("Final result is " + sum);

// 6. Sum of even numbers up to n
let q = 10;
let sumEven = 0;

for (let i = 1; i <= q; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  }
}

console.log("The sum of the even numbers is " + sumEven);

// 7. Print all odd numbers in a range
let start = 3;
let end = 20;

for (let i = start; i <= end; i++) {
  if (!(i % 2 === 0)) {
    console.log(i + " is an odd number in the range of 3 and 20");
  }
}

// 8. Find the average of number in an array
let arr = [2, 4, 6, 8];
let sumArr = 0;
let lengthArr = arr.length;

for (let i = 0; i < lengthArr; i++) {
  sumArr += arr[i];
  console.log("The sum now is " + sumArr);
}

console.log("The mean of the arr number is " + sumArr / lengthArr);

// 9. Count even number and odd number in an array
let arrayOfNumbers = [1, 2, 3, 4, 5];
let evenCount = 0;
let oddCount = 0;

for (let num of arrayOfNumbers) {
  if (num % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Odd count is " + oddCount);
console.log("Even count is " + evenCount);

// 10. Longest word in a sentence
let sentence = "I love coding";
let words = sentence.split(" ");
console.log("Words: " + words);
let longest = words[0];

for (let word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}

console.log("The longest word is " + longest);

// Class
// Class is a template of creating an Object.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years.`);
  }
}

const person1 = new Person("Tise", 22);

console.log(person1.name);
console.log(person1.age);
person1.greet();
console.log(person1);
