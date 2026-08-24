// Task 1
for(var i = 1; i <= 10; i++) {
    console.log(`Seating no.: ${i}`);
}

// Task 2
for(var i = 2; i <= 20; i += 2) {
    console.log(`Available seats: ${i}`);
}

// Task 3
var totalSales = 0;

for(var i = 1; i <= 15; i++) {
    totalSales += i;
}

console.log(`Total Sales: ${totalSales}`);

// Task 4
var temp = 1;

while (temp <= 7) {
    console.log(`Tickets: ${temp}`);
    temp++;
}

// Task 5
var countdown = 8;

while (countdown > 0) {
    console.log(`remaining seconds: ${countdown}`);
    countdown--;
}

// Task 6
var i = 1;

do {
    console.log(`${i} - Welcome!`);
    i++;
} while (i <= 5);

// Task 7
var itemsInCart = 10;

while (itemsInCart < 5) {
  console.log("while loop executed"); // while loop check condition before execution
}

do {
  console.log("Start Shopping!"); // do while loop executes once before checking condition then it's like normal while loop
} while (itemsInCart < 5);

// Task 8
var userName = "Ali";
var userAge = 22;
var isStudent = true;

console.log(`username: ${userName}, data type: ${typeof userName}`);
console.log(`user age: ${userAge}, data type: ${typeof userAge}`);
console.log(`is student: ${isStudent}, data type: ${typeof isStudent}`);

// Task 9
var dbPrice = 10;
var inputPrice = "10";

console.log(`dbPrice == inputPrice: ${dbPrice == inputPrice}`); // value comparison
console.log(`dbPrice === inputPrice: ${dbPrice === inputPrice}`); // value + data type comparison

// Task 10
var userName = window.prompt("Enter your username: ");

window.alert(`Welcome, ${userName}`);
console.log(`Welcome, ${userName}`);

// Task 11
var piecesNumber = window.prompt("Enter no. of pieces: ");

console.log(`data type using Number(): ${typeof Number(piecesNumber)}`);
console.log(`data type using parseInt(): ${typeof parseInt(piecesNumber)}`);
console.log(`data type using +: ${typeof +piecesNumber}`);

// Task 12
var a = 10;
var b = 3;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ^ ${b} = ${a ** b}`);

// Task 13
var age = Number(window.prompt("Enter you age: "));

if (age >= 18) {
    console.log("You can enter");
} else {
    console.log("Sorry, underage");
}

// Task 14
var degree = Number(window.prompt("Enter your degree: "));

if (degree >= 90) {
    console.log(`Grade: A`);
} else if (degree >= 80) {
    console.log(`Grade: B`);
} else if (degree >= 70) {
    console.log(`Grade: C`);
} else {
    console.log(`Grade: D`);
}

// Task 15
var age = Number(window.prompt("Enter you age: "));

console.log(age >= 18 ? "adult" : "minor");

// Task 16
var day = window.prompt("Enter day name: ");

switch(day) {
    case "friday":
        console.log("weekend");
        break;
    
    case "saturday":
        console.log("weekend");
        break;

    default:
        console.log("not weekend");
}

// Task 17
var pricePerPiece = Number(window.prompt("Enter the price per piece: "));

for (var i = 1; i <= 10; i++) {
    console.log(`${i} x ${pricePerPiece} = ${i * pricePerPiece}`);
}

// Task 18
var size = Number(window.prompt("Enter file size: "));

if (size > 0) {
    for(var i = 1; i <= size; i++) {
        console.log(`Download progress: ${i}`);
    }
} else {
    console.log("Invalid file size");
}

// Task 19
var startOfRange = Number(window.prompt("Enter the starting Number"));
var endOfRange = Number(window.prompt("Enter the ending Number"));

for(var i = startOfRange; i <= endOfRange; i++) {
    if (i % 2 == 0) {
        console.log(`order id ${i}: express`);
    } else {
        console.log(`order id ${i}: normal`);
    }
}

// Task 20
var students = ["ahmed", "mohamed", "amira", "aya", "mo'men", "dina", "omar", "ali", "sama"];

for(var i = 0; i < students.length; i++) {
    console.log(`Student ${i + 1}: ${students[i]}`);
}

// Task 21
var expenses = [];

for(var i = 0; i < 5; i++) {
    expenses[i] = Number(window.prompt(`Enter day ${i + 1} expeneses: `));
}

var sum = 0;

for(var expense of expenses) {
    sum += expense;
}

var avg = sum / expenses.length;

console.log(`sum: ${sum}, average: ${avg}`);

// Task 22
var correctPin = "1234";
var attempts = 3;
var pin;

while(attempts > 0) {
    pin = window.prompt("Enter pin: ");

    if (pin === correctPin) {
        console.log("Success");
        break;
    }

    attempts--;
}

if (attempts === 0) {
    console.log("Failed");
}

// Task 23
var hasAccount = true;
var isVerified = false;

if (hasAccount && isVerified) {
    console.log("Welcome back");
} else if (hasAccount || isVerified) {
    console.log("Please verify your account");
} else if (!hasAccount) {
    console.log("Please sign up");
}

// Task 24
var a = 40;
var b = 50;
var c = 60;
var d = 30;
var e = 30;
var sum = a + b + c + d + e;

console.log(sum);

if (sum <= 20) {
    for(var i = 1; i <= sum; i++) {
        console.log(i);
    }
} else {
    console.log("Too big to print line by line");
}