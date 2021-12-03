"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello World. Welcome Back';
console.log(message);
/*Variable types */
var isBegin = true;
var total = 100;
var name = 'Ankit';
var isNew = undefined;
var myName = null;
/*Template Strings multiple lines with expression */
var sentence = "My Name is " + name + "\nI am Beginner";
/*Array Syntax*/
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
/*Array with Multiple type*/
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
/* Type Inferance */
/* Specify Multiple Type to Variable */
var multiType;
multiType = true;
multiType = 20;
/* Function */
function add(num1, num2) {
    return num1 + num2;
}
function display() {
    console.log(add(5, 10));
}
display();
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Ankit',
    lastName: 'Rane',
    age: 26
};
fullName(p);
/*Classes with constructor*/
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empolyeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.empolyeeName);
    };
    return Employee;
}());
var e1 = new Employee('Amey');
console.log(e1.empolyeeName);
e1.greet();
/* Inheritance */
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegareWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegareWork();
m1.greet();
console.log(m1.empolyeeName + " has Manager whoes name is " + m1.delegareWork);
