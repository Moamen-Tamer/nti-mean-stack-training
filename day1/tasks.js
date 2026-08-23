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

// Task 16
console.log(2 + 8 + "0"); // 100
console.log("2" + 8 + 0); // 280
console.log(2 + "8" + 0); // 280

// Task 17
var city1 = "Alex";
var city2 = city1;
city2 = "Giza";

console.log(city1, city2); // المتغير city2 بيطبع Giza بدل ما يكون Alex زي city1 عشان هي اخر data اتعملها store جواها

var car1 = { brand: "Toyota" };
/*var car2 = car1;*/
var car2 = Object.assign({}, car1);
car2.brand = "Honda";

console.log(car1, car2);

// Task 18
const mixedBag = [
    "Hello, World!",                    
    42,                                 
    true,                               
    null,                               
    undefined,                          
    { name: "Ahmed", age: 25 },         
    [1, 2, 3]                            
];

console.log(`type of first item: ${typeof mixedBag[0]}`);
console.log(`type of second item: ${typeof mixedBag[1]}`);
console.log(`type of third item: ${typeof mixedBag[2]}`);
console.log(`type of fourth item: ${typeof mixedBag[3]}`);
console.log(`type of fifth item: ${typeof mixedBag[4]}`);
console.log(`type of sixth item: ${typeof mixedBag[5]}`);
console.log(`type of seventh item: ${typeof mixedBag[6]}`);

// Task 19
var clientName = window.prompt("Enter your name: ");
var orderPrice = Number(window.prompt("Enter the price of order: "));
var confirmation = window.confirm("are you sure?");
var message = `client name: ${clientName}, order price: ${orderPrice}, confirmation: ${confirmation}`;

console.log(message);
window.alert(message);
document.getElementById("result").innerText = `Result:- ${message}`;

// Task 20
var firstNumber = Number(window.prompt("Enter the first number: "));
var secondNumber = Number(window.prompt("Enter the second number: "));

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`${firstNumber} ^ ${secondNumber} = ${firstNumber ** secondNumber}`);

// Task 21
var a = 40;
var b = 50;
var c = 60;
var d = 30;
var e = 30;
console.log(a + b + c + d + e); // لما الـc كانت بـ"60" دا بيخلي الارقام تتلزق في بعضها زي الـstrings و تدي 90603030 لكن لما الـc تكون بـ60 هتتحسب عادي و النتيجة 210

// Task 22 // مش معانا عشان فيها Function
// Task 23 // مش معانا عشان فيها Function

// Task 24
var a = "15";
var b = 15;
var c = null;
var d;
var e = [15];
var f = { value: 15 };

console.log(`value of a: ${a}, type of a: ${typeof a}, a == 15: ${a == 15}, a === 15: ${a === 15}`);
console.log(`value of b: ${b}, type of b: ${typeof b}, b == 15: ${b == 15}, b === 15: ${b === 15}`);
console.log(`value of c: ${c}, type of c: ${typeof c}, c == 15: ${c == 15}, c === 15: ${c === 15}`);
console.log(`value of d: ${d}, type of d: ${typeof d}, d == 15: ${d == 15}, d === 15: ${d === 15}`);
console.log(`value of e: ${e}, type of e: ${typeof e}, e == 15: ${e == 15}, e === 15: ${e === 15}`);
console.log(`value of f: ${f}, type of f: ${typeof f}, f == 15: ${f == 15}, f === 15: ${f === 15}`);

// Task 25
var productName = window.prompt("Enter product name: ");
var brand = window.prompt("Enter product brand: ");
var price = Number(window.prompt("Enter product price: "));
var category = window.prompt("Enter product category: ");
var inStock = window.confirm("Is this product in stock?");

var productInfo = {
    productName,
    brand,
    price,
    category,
    inStock
};

var message = `product name: ${productInfo.productName}, brand: ${productInfo.brand}, price: ${productInfo.price}, category: ${productInfo.category}, in stock: ${productInfo.inStock}`;

document.getElementById("mainTitle").innerText = message;
console.log(message);
window.alert(message);

console.log(`First letter of product name: ${productInfo.productName[0]}`); // Bonus