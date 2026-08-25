// Part A: 1
var name = "Ahmed Ali";

console.log(`length of the name: ${name.length} varters`);

// Part A: 2
var sentence = "I am learning JavaScript";

console.log(`uppercase: ${sentence.toUpperCase()}`);
console.log(`lowercase: ${sentence.toLowerCase()}`);

// Part A: 3
var email = "student@nti.com";

console.log(`does the email contain "@"? ${email.includes("@")}`);

// Part A: 4
var javascript = "JavaScript";

console.log(`first char of JavaScript: ${javascript[0]}`);
console.log(`last char of JavaScript: ${javascript[javascript.length - 1]}`);

// Part A: 5
var opinion = "This is a bad day";

console.log(`the new opinion: ${opinion.replace("bad", "good")}`);

// Part A: 6
var spacedSentence = "I love coding";
var wordsArr = spacedSentence.split(" ");
var dashedSentence = wordsArr.join("-");

console.log(`the dashed sentence: ${dashedSentence}`);

// Part A: 7
console.log(`final result: ${" nti egypt training ".trim().toUpperCase().replace("EGYPT", "CAIRO")}`);

// Part B: 8
console.log(Number("45.8"));

// Part B: 9
console.log(`rounded value: ${Math.round(7.6)}`);
console.log(`floored value: ${Math.floor(7.6)}`);
console.log(`ceiled value: ${Math.ceil(7.6)}`);

// Part B: 10
console.log(`largest number: ${Math.max(12, 5, 28, 9)}`);
console.log(`smallest number: ${Math.min(12, 5, 28, 9)}`);

// Part B: 11
console.log(Math.floor(Math.random() * 20) + 1);

// Part B: 12
var num = 19.4567;
console.log(`two decimals number: ${num.toFixed(2)}`);

// Part B: 13
var numbers = [];

for (var i = 0; i < 5; i++) {
    var randomNum = Math.floor(Math.random() * 50) + 1;
    numbers.push(randomNum);
}

var max = Math.max(...numbers);
var min = Math.min(...numbers);
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

var avg = sum / numbers.length;

console.log("Numbers:", numbers);
console.log("Largest:", max);
console.log("Smallest:", min);
console.log("Average:", avg);

// Part C: 14
for(var i = 1; i <= 20; i++) {
    console.log(i);
}

// Part C: 15
for(var i = 1; i <= 15; i += 2) {
    console.log(i);
}

// Part C: 16
var countdown = 10;

while(countdown != 0) {
    console.log(countdown);
    countdown--;
}

// Part C: 17
var names = ["Sara", "Omar", "Mona", "Youssef"];

for(name of names) {
    console.log(name);
}

// Part C: 18
for(var i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }

    console.log(i);
}

// Part C: 19
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Part C: 20
for(var i = 1; i <= 30; i++) {
    if (i === 25) {
        break;
    }

    if (i % 3 === 0) {
        continue;
    }

    console.log(i);
}

// Part D: 21
var greeting = "Hello";

for(var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}

// Part D: 22
var nums = [10, 20, 30, 40];
var sum = nums.reduce((num, total) => total += num, 0);

console.log(`sum: ${sum}`);

// Part D: 23
var counter = 0;
var appreciation = "JavaScript is amazing and awesome";

for(var i = 0; i < appreciation.length; i++) {
    if (appreciation[i] === "a" || appreciation === "A") counter++;
}

console.log(`no. of A's: ${counter}`);

// Part D: 24
var grades = [70, 85, 92, 60, 77, 88];
var evenGrades = grades.filter((grade) => grade % 2 === 0);

console.log(`even grades: ${evenGrades}`);

// Part D: 25
for (var i = 1; i < 5; i++) {
    var row = "";

    for (var j = 0; j < i; j++) {
        row += "*";
    }

    console.log(row);
}

// better version with only one loop
/* for(var i = 1; i < 5; i++) {
    console.log("*".repeat(i));
} */

// Part D: 26
var students = ["ahmed", "sara", "omar", "laila", "hassan"];
var matchCount = 0;

for (var i = 0; i < students.length; i++) {
    var upperName = students[i].toUpperCase();
    
    if (upperName.startsWith("A") || upperName.startsWith("S")) {
        console.log(upperName);
        matchCount++;
    }
}

console.log("Total matched:", matchCount);