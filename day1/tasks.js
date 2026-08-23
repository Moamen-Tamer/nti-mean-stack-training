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
