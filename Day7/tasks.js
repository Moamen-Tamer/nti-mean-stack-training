// Part A

// Task 1
function noStrictTest() {
    implicitGlobalVar = "I am a global variable"; 
}

noStrictTest();

console.log(`outside function: ${implicitGlobalVar}`);

// Task 2
function strictTest() {
    "use strict";

    try {
        strictGlobalVar = "I will fail";
    } catch (error) {
        console.log(`strict mode error: ${error.message}`);
    }
}

strictTest();

// Task 3
function strictDeleteTest() {
    "use strict";
    var localVar = "test";
    
    /* try {
        delete localVar;
    } catch (error) {
        console.log(`delete variable error: ${error.message}`);
    } */
    
    var obj = { property: "value" };
    delete obj.property;
}

strictDeleteTest();

// Part B

// Task 4
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// Task 5 - Case 1
sayHi(); // Hi

function sayHi () {
    console.log("Hi");
}

// Task 5 - Case 2
/* sayBye(); // error

var sayBye = function () { 
    console.log("Bye"); 
}; */

// الـFunction Declaration بيحصله Hoisting لكن الـFunction Expressions لأ

// Task 6
/* console.log(a);

let a = 5; */ // error

// let مش بيحصلها hoisting

// Task 7
var n = 1;

function demo() {
    console.log(n); // undefined

    var n = 2;

    console.log(n); // 2
}

demo();

console.log(n); // 1

// Part C

// Task 8
function varScopeTest() {
    if (true) {
        var hello = "Hello Inside";
    }

    console.log(`outside block: ${hello}`);
}

varScopeTest();

// Task 9
function blockScopeTest() {
    if (true) {
        let tryLet = "trying let";
        const tryConst = "trying const";
    }

    /* console.log(tryLet);
    console.log(tryConst); */
}

blockScopeTest();

// Task 10
var place = "First";
var place = "Second"; 

console.log(`place: ${place}`);

/* let place = "First";
let place = "Second"; */

// Task 11
const studentData = { 
    name: "Mo'men", 
    age: 20, 
    city: "Mansoura" 
};

studentData.age = 21;

console.log(`after changing age: ${JSON.stringify(studentData)}`);

studentData.grade = "A+";

console.log(`after adding grade: ${JSON.stringify(studentData)}`);

delete studentData.city;

console.log(`after deleting city: ${JSON.stringify(studentData)}`);

try {
    studentData = { 
        name: "Ali", 
        age: 25 
    }; 
} catch (error) {
    console.log(`error: ${error.message}`);
}

// Task 12
const nums = [1, 2, 3];

nums.push(4); // Allowed
nums[0] = 99; // Allowed
console.log(`nums: ${nums}`);

try {
    nums = [5, 6, 7]; // Not allowed
} catch (error) {
    console.log(`error: ${error.message}`);
}

// Task 13
var a; // Valid
let b; // Valid
/* const c; */ // Invalid

// Task 14
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

// Task 15
const handlers = {};

for (let i = 0; i < 3; i++) { 
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}

console.log(handlers.fn0());
console.log(handlers.fn2());

// Part D

// Task 16
const welcome = (name) => `Welcome, ${name}!`;

console.log(welcome("Mo'men"));

// Task 17
const fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;

console.log(fullInfo("Mo'men", "Tamer", 21));

// Task 18
const multiply = (a, b) => a * b;

console.log(`4 * 5: ${multiply(4, 5)}`);

const printAndSum = (a, b) => {
    console.log(`numbers to sum: ${a} and ${b}`);

    return a + b;
};

console.log(`10 + 15: ${printAndSum(10, 15)}`);


// Part E

// Task 19
const productDetails = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};

const { title, price, inStock } = productDetails;

console.log(`title: ${title}, price: ${price}, inStock: ${inStock}`);

// Task 20
const webSkills = ["HTML", "CSS", "JS", "React"];
const [firstSkill, secondSkill] = webSkills;

console.log(`first two skills: ${firstSkill}, ${secondSkill}`);

// Task 21
const greet = (name = "Guest", message = "Hello") => `${message}, ${name}!`;

console.log(greet("Ali", "Welcome"));
console.log(greet("Sara"));
console.log(greet());

// Task 22
const sumAll = (...numbers) => numbers.reduce((total, num) => total + num, 0);

console.log(`1 + 2 + 3: ${sumAll(1, 2, 3)}`);
console.log(`10 + 20 + 30 + 40: ${sumAll(10, 20, 30, 40)}`);

// Task 23
const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const mergedArray = [...arr1, ...arr2];

console.log(`merged array: ${mergedArray}`);

const originalNumbers = [10, 20, 30];
const copiedNumbers = [...originalNumbers];

copiedNumbers.push(40);

console.log(`copied array: ${copiedNumbers}`);
console.log(`original array: ${originalNumbers}`);

// Task 24
const userObj = { name: "Sara", age: 22 };
const contactObj = { email: "sara@nti.com", age: 23 };

const mergedUser = { ...userObj, ...contactObj };

console.log(`merged object: ${JSON.stringify(mergedUser)}`); // age: 23
// الـ23 بتـOverwrite الـ22

// Task 25
const arrayValues = [2, 4, 6, 8];

function totalValues(a, b, c, d) {
    return a + b + c + d;
}

console.log(`total: ${totalValues(...arrayValues)}`);


// Part F

// Task 26
let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1;
person2.name = "Omar";

console.log(person1.name); // omar 
// omar overwrites due to passing by reference

// Task 27
const originalObj = {
    name: "Mona",
    details: { city: "Cairo" }
};

const shallowCopy = { ...originalObj };
shallowCopy.name = "Nada";
shallowCopy.details.city = "Alex";

console.log(`original: ${JSON.stringify(originalObj)}`);
console.log(`shallow copy: ${JSON.stringify(shallowCopy)}`); // city is passed by reference while name is passed by value

// Task 28
const arr = {
    name: "Mona",
    details: { city: "Cairo" }
};

const deepCopy = structuredClone(arr);
deepCopy.details.city = "Aswan";

console.log(`original: ${JSON.stringify(arr)}`);
console.log(`deep copy: ${JSON.stringify(deepCopy)}`);

// Task 29
const user = { name: "Ahmed", age: 26, city: "Alex" };

localStorage.setItem("userdata", JSON.stringify(user));

const retrievedString = localStorage.getItem("userdata");

const parsedData = JSON.parse(retrievedString);

console.log(`parsed data type: ${typeof parsedData}`);
console.log(`name: ${parsedData.name}, age: ${parsedData.age}, city: ${parsedData.city}`);

localStorage.removeItem("userdata");

// Part G

// Task 30
const APP_CONFIG = {
    name: "SuperApp",
    version: "1.0.0",
    api: {
        baseUrl: "https://api.example.com",
        timeout: 5000
    },
    features: ["auth"]
};

APP_CONFIG.api.timeout = 10000;
APP_CONFIG.features.push("notifications");

try {
    APP_CONFIG = {}; 
} catch (error) {
    console.log(`error: ${error.message}`);
}

// Task 31
const createCard = (title, price = 0, ...tags) => {
    return {
        title,
        price,
        tags,
        label: `${title} - ${price} EGP`
    };
};

const firstCard = createCard("Laptop", 15000, "tech", "computer", "portable");
const secondCard = createCard("Mouse", 300, "electronics", "computer");

console.log(`first card: ${JSON.stringify(firstCard)}`);
console.log(`second card: ${JSON.stringify(secondCard)}`);

// Task 32
const classStudents = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

classStudents.forEach(({ name, grade }) => {
    console.log(`${name} scored ${grade}`);
});