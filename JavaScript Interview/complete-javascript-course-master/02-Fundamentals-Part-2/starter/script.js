'use strict';
//use of stric mode. indicates mistakes
let hasDriversLicense=false;
const passTest=true;

if(passTest) hasDriversLicense=true;
if(hasDriversLicense) console.log('I can Drive');

//functions
//simple function
function logger(){
    console.log('My Name is Jonas');
}
// calling / running / invoking function
logger();
logger();
logger();
//return function
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  } 
  const appleJuice = fruitProcessor(5, 0);
  console.log(appleJuice);
  
  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);
  
  const num = Number('23');//inbuilt functions

// Function Declarations vs. Expressions
// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1991);
 
  // Function expression
  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const age2 = calcAge2(1991);
  console.log(age1, age2);

  // Arrow functions
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);

// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}
 
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
 
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

const friends = ['Michael', 'Steven', 'Peter'];
const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[2]);
friends[2]='John';
console.log(friends);
// Add elements
const newLength = friends.push('Jay');
console.log(friends);
friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah:1991,
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  // //object method
  // calcAge:function(birthYeah){
  //   return 2037-birthYeah;
  // }
  //object method wtihout parameter accessing variable
  calcAge:function(){
    return 2037-this.birthYeah;
  }
};
console.log(jonas); //Print full object
console.log(jonas.lastName); //to print object with key
console.log(jonas['firstName']); //to print object with key
const nameKey='Name';
console.log(jonas['first'+nameKey]); //to print object with key

console.log(jonas.calcAge(1991));

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// Looping Arrays, Breaking and Continuing
const vikiArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];
for(let i=0;i<vikiArray.length;i++){
  console.log(vikiArray[i]);
  types[i]=typeof jonasArray[i];
}
console.log(types);

//while loop
let rep = 1;
while (rep <= 5) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}