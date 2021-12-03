function sing() {
	console.log("A");
	console.log("Z");
	console.log("D");
}
function greet(abc) {
	console.log('Name:' + abc);
}
//Function with One Arguments
console.log("Function with One Arguments");
function rant(message) {
	console.log(message.toUpperCase());
}

rant("I hate beets");
rant("I hate beets");
rant("I hate beets");

//Function with Multiple Argument
console.log("Function with Multiple Argument");
function rant(message, comment) {
	console.log(message.toUpperCase(), comment);
}

rant("I hate beets", "Hi");
rant("I hate beets", "Hello");
rant("I hate beets", "How Are You");

//Return Function
console.log("Return Function");
function multiply(x, y) {
	let ans = x * y;
	return ans;
}

let animal = "Giant Pacific Octopus";
function observe() {
	let animal = "Pajama Squid";
	console.log(animal);
}
observe();