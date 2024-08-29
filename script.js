console.log("Hello world!");

function myFirstFunction() {
  console.log("I just called my first function");
}

myFirstFunction(); //This is a function call

function example(parameters) {
  // JS statement
  console.log("We could use " + parameters + " in the function optionally");
}

example("Parameters");

example(45);

function funcWithParams(num1, num2) {
  console.log(num1 + num2);
}
funcWithParams(3, 4);

// Exercise 1

function milkshakeBlender(magic1, magic2) {
  console.log(`My milkshake is made by ${magic1} and ${magic2}`);
}

milkshakeBlender("banana", "strawberry");

// return

function funcAdd(num1, num2) {
  return num1 + num2;
}

console.log(funcAdd(3, 4));

let funcAnswer = funcAdd(3, 4);

if (funcAnswer === 7) {
  console.log("the answer is right");
} else {
  console.log("the answer is wrong");
}

// Function expression

const funcWithParamsExpression = function (num1, num2) {
  return num1 + num2;
  // Unreachable code detected below
  console.log(`num1 is ${num1}`);
};

console.log(funcWithParamsExpression(3, 4));

// Exercise 2
const checkStr = function (str) {
  // if (str === "") {
  //   return false;
  // } else {
  //   return true;
  // }

  return str ? true : false;

  //return Boolean(str);

  //if the str is empty I will get false
};

console.log(checkStr(""));
console.log(checkStr("Hello!"));

//Functions in Objects, ie Methods
const person2 = {
  firstName: "John",
  lastName: "Doe",
  greetings: function (name) {
    console.log(`Hi ${name}, weather is good.`);
  },
};

console.log(person2.firstName);
console.log(person2["lastName"]);
person2.greetings("Jordan");

// Passing Object as a parameters
function printName(obj) {
  console.log(obj);
  console.log(`Hello, ${obj.firstName} ${obj.lastName}`);
}

printName(person2);

//objectName.methodName(argument);
//person.greeting("Rob");

//Life in Weeks Coding Exercise

// Exercise 3
function lifeInWeeks(age) {
  let yearsRemaining = 90 - age;
  let x = yearsRemaining * 365;
  let y = yearsRemaining * 52;
  let z = yearsRemaining * 12;

  console.log(`You have ${x} days, ${y} weeks and ${z} months left`);
}

lifeInWeeks(18);

//Window Object
console.log(window);

//alert("Hello world!");

//window.alert("Hello world, again!");

//let message = prompt("How old are you?", "default string");
//console.log(message);
//console.log(typeof message);

//string to number method
//console.log(Number(message, typeof Number(message)));
//   console.log(+message, typeof +message);

//open the blank window prompt
//   let sign = window.prompt();

//open the blank prompt window - same as above
//   sign = prompt();

//open the window with Text "Are you feeling lucky"
//   sign = window.prompt("Are you feeling lucky");

//Window with text "Are you feeling lucky" & default value "sure"
//   sign = window.prompt("Are you feeling lucky", "sure");

// Exercise 1
const colour = prompt("What's your favourite colour?");
//alert(`Your favourite colour is ${colour}`);

//If userinput nothing
if (colour === "") {
  alert("Please enter a valid colour.");
} else {
  alert(`Your favourite colour is ${colour}`);
}

"CAN YOU HEAR ME".toLowerCase();
// OUTPUT - "can you hear me"

"Is this mic on?".toUpperCase();
// OUTPUT - "IS THIS MIC ON?"

"   trim or not to trim, but keep the middle spaces".trim();
//OUTPUT - "trim or not to trim, but keep the middle spaces"

const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.split(" "));
console.log(str.split(""));

// Exercise 2

const userInput = prompt("please enter some text!");
const trimmedInput = userInput.trim();

console.log(trimmedInput);

if (trimmedInput.length <= 10 && trimmedInput.length > 0) {
  alert(trimmedInput.toUpperCase());
} else if (trimmedInput.length > 10) {
  alert(trimmedInput.toLowerCase());
} else {
  alert("Not a valid input!");
}
