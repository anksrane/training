const first = () => {
    const greet = 'Hi';
    const second = () => {
        console.log(greet);
    }
    return second;
}
const newFunc = first();
newFunc();

//Normal Function
function hello() {
    console.log("Simple Function");
}
hello();

//Shorthand Function
hi = function () {
    console.log("Short Hand Function");
}
hi();
//_____________________________________________Advance Function___________________________________________________________//
//______________________________________________ES5 & ES6______________________________________________//
//Arrow Function//
h2 = () => console.log("Arrow Function");
h2();

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => console.log(a * b);
const multiplyBy5 = curriedMultiply(3);
multiplyBy5(6);

//Compose
const compose = (f, g) => (a) => f(g(a));
//_______________________________________Advance Array_____________________________________________//
var array = [1, 2, 5, 10, 15, 20];

function print() {
    /*for(i=0;i<array.length;i++){
        console.log("Array Print",array[i]);
    }*/
    array.forEach(i => console.log("Array Is:", i));
    array.forEach(i => console.log("Double Is:", i * 2));
}

//Map
const mapArray = array.map((num) => {
    return num * 2;
});
console.log("Map Array", mapArray);

//Filter
const filterArray = array.filter((num) => {
    return num > 5;
});
console.log("Filter Array", filterArray);

//reduce
const reduceArray = array.reduce((acc, num) => {
    return acc + num;
}, 0);
console.log("Reduce Array", reduceArray);

//_______________________________________________Advance Objects____________________________________________________________________//

//Instantiation//
class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log("Hi I am", this.name, ". I'm", this.type);
    }
}
class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log("WWWWEEEEEEEEEE", this.type);
    }
}
const wizard1 = new Wizard('Shelly', 'Healer');
wizard1.play();
wizard1.introduce();
/*const wizard2=new Wizard('Day','DAwn');
wizard2.play();
wizard2.introduce();*/

//___________________________________________ES7______________________________________________//
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
if (dragons.includes('Sandy') == true) {
    console.log("Found");
}
else {
    console.log("Not Found");
}

//___________________________________________ES8(2017)______________________________________________//
'ankit'.padStart(10);
'ankit'.padEnd(10);

const fun = (a, b, c = 5, d,) => { console.log("Extra Comma", a, b, c, d); }
fun(1, 2)

//Object Print using foreach
let obj = {
    user0: 'Santa', user1: 'banta', user2: 'san'
}
Object.keys(obj).forEach((key, index) => {
    console.log(key, " : ", obj[key]);
})
Object.values(obj).forEach(values => {
    cos
})