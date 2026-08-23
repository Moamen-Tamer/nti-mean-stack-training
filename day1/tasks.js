// Task 1
console.log('JS is running successfully');

// Task 2
window.alert('Ready to practice!');

// Task 3
var productName = "laptop";
var price = 15000;
var isAvailable = true;

console.log(`product name: ${productName} | its type: ${typeof productName}`);
console.log(`price: ${price} | its type: ${typeof price}`);
console.log(`is available: ${isAvailable} | its type: ${typeof isAvailable}`);

// Task 4
document.getElementById('mainTitle').innerText = "Practice Time";

// Task 5
var city = "Cairo";
var country = "Egypt";

console.log(city + ", " + country);

// Task 6
console.log(`location: ${city} - ${country}`);

// Task 7
var itemPrice = 120;
var quantity = 3;

console.log(`Total Cost: ${itemPrice * quantity} EGP`);
console.log(`Difference: ${400 - (itemPrice * quantity)} EGP`);
console.log(`Multiplication: ${itemPrice * quantity}`);
console.log(`Division: ${itemPrice / quantity}`);
console.log(`Remainder: ${itemPrice % quantity}`);
console.log(`Square Exponent: ${quantity ** 2}`);

// Task 8
var favouriteColor = window.prompt("What's your favourite color: ");
document.getElementById('favouriteColor').innerText = `Your favorite color is: ${favouriteColor}`;

// Task 9
var score = 20;
var textScore = "20";

console.log(`loose (==): ${score == textScore}`); // true => عشان الـ== بتقارن القيمة
console.log(`strict (===): ${score === textScore}`); // false => عشان الـ== بتقارن القيمة و النوع

// Task 10
var piecesNumber = window.prompt("Enter no. of pieces: ");

console.log(`data type using Number(): ${typeof Number(piecesNumber)}`);
console.log(`data type using parseInt(): ${typeof parseInt(piecesNumber)}`);
console.log(`data type using +: ${typeof +piecesNumber}`);

// Task 11
var fruits = ["apple", "banana", "mango"];

console.log(`second fruit: ${fruits[1]}`);

fruits[1] = "orange";
fruits.push("grapes")

console.log(fruits);

// Task 12
var course = {
    title: "MEAN stack",
    hours: 120,
    level: "advanced"
};

course.title = "MEAN stack, web development";

console.log(`course hours: ${course.hours}`);

console.log(course);

// Task 13
var hasAccount = true;
var isVerified = false;

console.log(`hasAccount AND isVerified: ${hasAccount && isVerified}`);
console.log(`hasAccount OR isVerified: ${hasAccount || isVerified}`);
console.log(`NOT isVerified: ${!isVerified}`);

// Task 14
var balance = 50;

balance += 30;
balance *= 2;
balance -= 20;

console.log(`balance: ${balance}`);

// Task 15
var hotel = window.prompt("hotel name: ");
var nights = Number(window.prompt("no. of nights: "));
var confirmation = window.confirm("are you sure?");

console.log(`Hotel: ${hotel}, Nights: ${nights}, Confirmed: ${confirmation}`);