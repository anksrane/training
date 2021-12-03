/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
import Car from "./Car.js";

const myBag=new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false
);
console.log("Nww Bag is",myBag.newStrapLength);
const myCar=new Car(
    "Tata",
    "XUV",
    2021,
    "Red",
    250000
);

console.log("Before Price Object",myCar);
console.log("Before Price Car",myCar.price);

myCar.calculatePrice(250000);
console.log("After Price Object",myCar);
console.log("After Price Car",myCar.price);