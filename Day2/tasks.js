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