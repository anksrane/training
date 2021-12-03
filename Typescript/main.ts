export{}
let message='Hello World. Welcome Back';
console.log(message);

/*Variable types */
let isBegin:boolean=true;
let total:number=100;
let name:string='Ankit';
let isNew:boolean=undefined;
let myName:string=null;

/*Template Strings multiple lines with expression */
let sentence:string=`My Name is ${name}
I am Beginner`

/*Array Syntax*/
let list1:number[]=[1,2,3];
let list2:Array<number>=[1,2,3];

/*Array with Multiple type*/
let person1:[string,number]=['Chris',22];
enum Color{Red,Green,Blue};

/* Type Inferance */

/* Specify Multiple Type to Variable */
let multiType:number|boolean;
multiType=true;
multiType=20;


/* Function */
function add(num1:number,num2:number){/*Question Mark With Parameter means Optional*/
    return num1+num2;
}
function display(){
    console.log(add(5,10));
}
display();

/*Interfaces-Easy to Manage Large Code*/
interface Person{
    firstName:string;
    lastName:string;
    age:number;
}
function fullName(person:Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p={
    firstName:'Ankit',
    lastName:'Rane',
    age:26
};
fullName(p);

/*Classes with constructor*/
class Employee{
    empolyeeName:string;

    constructor(name:string){
        this.empolyeeName=name;
    }

    greet(){
        console.log(`Good Morning ${this.empolyeeName}`);
    }
}
let e1=new Employee('Amey');
console.log(e1.empolyeeName);
e1.greet();

/* Inheritance */
class Manager extends Employee{
    constructor(managerName:string){
        super(managerName);
    }
    delegareWork(){
        console.log(`Manager delegating tasks`);
    }
}
let m1=new Manager("Bruce");
m1.delegareWork();
m1.greet();
console.log(`${m1.empolyeeName} has Manager whoes name is ${m1.delegareWork}`);



