
//Challenge One
console.log("-------------Challenge One----------------------");
const massMark=78;
const heightMark=1.69;
const massJohn=92;
const heightJohn=1.95;

const BMIMark=massMark/heightMark**2;
const BMIJohn=massJohn/(heightJohn*heightJohn);
const markHigherBMI=BMIMark<BMIJohn;

console.log(BMIMark, BMIJohn,markHigherBMI);

//Template Literals
const firstName='john';
const job='teacher';
const birthYear=1991;
const year=2037;

const templtWay=`I'm ${firstName}, a ${year-birthYear} year old ${job}`;
console.log(templtWay);

//Type Conversion
let inputYear='1991';
console.log(Number(inputYear));     //Convert String to Number
console.log(Number(inputYear)+18);
console.log(Number('Jonas'));
console.log(String(23),23);

//Type Coercion
const a=`please add 1+2=${+1+2}`;
console.log(1+2);
