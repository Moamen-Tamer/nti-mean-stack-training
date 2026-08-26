// Part A

// Task 1
var car = { 
    brand: "Toyota", 
    model: "Corolla", 
    year: 2020, 
    color: "red" 
};

console.log(car);

// Task 2
console.log(`car's brand: ${car.brand}`);
console.log(`car's year: ${car["year"]}`);

// Task 3
car.color = "black";
car.price = 1000000;
console.log(car);

// Task 4
delete car.year;
console.log(`car's year: ${car.year}`); // قيمة اي متغير مش معرف بتكون undefined

// Task 5
var student = { 
    "student-name": "Sara", 
    age: 20 
};

console.log(`student name: ${student["student-name"]}`);

// Task 6
var book = { 
    title: "JavaScript Basics", 
    author: { 
        firstName: "John", 
        lastName: "Doe" 
    } 
};

console.log(`author's last name: ${book.author.lastName}`);

// Task 7
var person = { 
    name: "Ali", 
    age: 25, 
    city: "Cairo" 
};
console.log(`Keys: ${Object.keys(person)}`);
console.log(`Values: ${Object.values(person)}`);
console.log(`Has 'job': ${person.hasOwnProperty("job")}`);

// Task 8
var settings = { 
    theme: "dark", 
    lang: "en" 
};

Object.freeze(settings);
settings.theme = "light";
settings.fontSize = 16;
console.log(`settings object: ${JSON.stringify(settings)}`); // الـobject.freeze بتوقف اي تغييرات في الـpbject

// Part B

// Task 9
var cities = ["Cairo", "Giza", "Alexandria", "Sohag", "Talkha"];

console.log(`cities array: ${cities}`);
console.log(`cities length: ${cities.length}`);

// Task 10
console.log(`first city: ${cities[0]}`);
console.log(`second city: ${cities[1]}`);
console.log(`last city: ${cities[cities.length - 1]}`);

// Task 11
cities.push("Mansoura");

console.log(`cities after push: ${cities}`);

cities.unshift("Tanta");

console.log(`cities after unshift: ${cities}`);

// Task 12
cities.pop();

console.log(`cities after pop: ${cities}`);

cities.shift();

console.log(`cities after shift: ${cities}`);

// Task 13
var skills = ["HTML", "CSS", "JS", "React"];

console.log(`index of JS: ${skills.indexOf("JS")}`);
console.log(`includes Python: ${skills.includes("Python")}`);

// Task 14
var items = ["pen", "book", "bag"];

items.forEach(function(item, index) {
    console.log(`${index}: ${item}`);
});

// Task 15
var colors = ["red", "green", "blue", "yellow"];

for (var color of colors) {
    if (color === "blue") {
        break;
    }

    console.log(`color: ${color}`);
}

// Task 16
var letters = ["A", "B", "C"];

letters.push("D", "E");
letters.shift();

console.log(`final array: ${letters}`);
console.log(`array length: ${letters.length}`);

// Part C

// Task 17
var fruits = ["apple", "banana", "cherry"];

var upperFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});

console.log(`new array: ${upperFruits}`);
console.log(`original array: ${fruits}`);

// Task 18
var numbers = [10, 55, 30, 80, 45, 90];

var greaterThanFifty = numbers.filter(function(num) {
    return num > 50;
});
console.log(`numbers greater than 50: ${greaterThanFifty}`);

// Task 19
var cities = ["Cairo", "Giza", "Alex", "Aswan"];

var firstA = cities.find(function(city) {
    return city.startsWith("A");
});

var firstAIndex = cities.findIndex(function(city) {
    return city.startsWith("A");
});

console.log(`first city starting with A: ${firstA}`);
console.log(`index of first city starting with A: ${firstAIndex}`);

// Task 20
var chars = ["a", "b", "c", "d", "e"];
var slicedChars = chars.slice(1, 4);

console.log(`copied array: ${slicedChars}`);
console.log(`original array: ${chars}`);

// Task 21
var words = ["one", "two", "three", "four", "five"];
var removedWords = words.splice(1, 2);

console.log(`removed items: ${removedWords}`);
console.log(`array after change: ${words}`);

// Task 22
var sortNumbers = [40, 100, 1, 5, 25];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(`sorted numbers: ${numbers}`);

// Task 23
var ages = [16, 21, 17, 19];

var someAdult = ages.some(function(age) {
    return age >= 18;
});

var allAdult = ages.every(function(age) {
    return age >= 18;
});

console.log(`any age >= 18: ${someAdult}`);
console.log(`all ages >= 18: ${allAdult}`);

// Task 24
var values = [5, 10, 15, 20];

var total = values.reduce(function(total, current) {
    return total + current;
}, 0);

console.log(`total: ${total}`);

// Part D

// Task 25
var students = [
    { name: "Omar", grade: 80 }, 
    { name: "Mona", grade: 90 }, 
    { name: "Ali", grade: 70 }
];

for (var i = 0; i < students.length; i++) {
    console.log(`student name: ${students[i].name}, grade: ${students[i].grade}`);
}

// Task 26
var topStudents = students.filter(function(student) {
    return student.grade >= 80;
}).map(function(student) {
    return student.name;
});

console.log(`top students: ${topStudents}`);

// Task 27
var products = [
    { name: "Mouse", price: 300 }, 
    { name: "Keyboard", price: 500 }
];

var totalPrice = products.reduce(function(total, product) {
    return total + product.price;
}, 0);

console.log(`total price of all products: ${totalPrice}`);

// Task 28
var languages = ["js", "html", "css", "js", "react", "js"];

var count = languages.filter(function(lang) {
    return lang === "js";
}).length;

console.log(`"js" appears: ${count} times`);

// Task 29
var classroom = { 
    teacher: "Mr. Ahmed", 
    students: ["Omar", "Sara", "Youssef", "Nour"] 
};

console.log(`teacher name: ${classroom.teacher}`);
console.log(`number of students: ${classroom.students.length}`);
console.log(`last student name: ${classroom.students[classroom.students.length - 1]}`);

// Task 30
var storeItems = [
    { id: 1, title: "Pen", price: 10 }, 
    { id: 2, title: "Book", price: 50 }, 
    { id: 3, title: "Bag", price: 25 }
];

var titles = storeItems.map(function(item) {
    return item.title.toUpperCase();
});

var cheapItems = storeItems.filter(function(item) {
    return item.price < 30;
});

var storeTotal = storeItems.reduce(function(total, item) {
    return total + item.price;
}, 0);

console.log(`uppercase titles: ${titles}`);
console.log(`cheap items: ${JSON.stringify(cheapItems)}`);
console.log(`total of all prices: ${storeTotal}`);