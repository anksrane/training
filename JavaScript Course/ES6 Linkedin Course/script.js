// Sysmbol in JS----------------------------------- Create ID Element
const id = Symbol();

const courseInfo = {
  title: "JavaScript",
  topics: ["strings", "arrays", "objects"],
  id: "js-course"
};

courseInfo[id] = 41284;
console.log(courseInfo);


// Map Object------------------------------------------------
let course = new Map();

course.set("react", { description: "ui" });
course.set("jest", { description: "testing" });

// console.log(course);
// console.log(course.react);
// console.log(course.get("react"));

let details = new Map([
  [new Date(), "today"],
  [2, { javascript: ["js", "node", "react"] }],
  ["items", [1, 2]]
]);

// console.log(details.size);

details.forEach(function (item) {
  console.log(item);
});


// Set -----------------------------------
let books = new Set();
books.add("Pride and Prejudice");
books.add("War and Peace").add("Oliver Twist");
books.add("Pride and Prejudice");

console.log(books);
console.log(books.size);

books.delete("Oliver Twist");

console.log(
  "has Oliver Twist",
  books.has("Oliver Twist")
);


// Spread Operator ---------------------------------- Push array element to same level
let cats = ["Biscuit", "Jungle"];
let dogs = ["Stella", "Camper"];

let animals = [
  "Smoky",
  "Miro",
  "Swimmy",
  ...cats,
  ...dogs
];

console.log(animals);


// Destructuring Array -------------------------------------
let [first, , , , fifth] = [
    "Spokane",
    "Boston",
    "Los Angeles",
    "Seattle",
    "Portland"
  ];
  
  console.log(first);
  console.log(fifth);


// Includes ----------------------------------- Search inside string, array
let cities = [
  "Spokane",
  "Boston",
  "Los Angeles",
  "Seattle",
  "Portland"
];

console.log(cities.includes("Boston"));
console.log(cities.includes("Santa Barbara"));


// Object Literals ------------------------
function skier(name, sound) {
  return {
    name,     //Same as name:name
    sound,    //Same as sound:sound
    powderYell: function () {
      let yell = this.sound.toUpperCase();
      console.log(`${yell}! ${yell}!`);
    }
  };
}

skier("Sendy", "yeah").powderYell();

// Object using Spread ----------------- Keep Object Element in Same Level
const daytime = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly"
};

const nighttime = "mac and cheese";

const backpackingMeals = {
  ...daytime,
  nighttime
};

console.log(backpackingMeals);


// For Of Loop ---------------------------------------------------
// String
for(let letter of "Ankit Ashok Rane"){
  console.log(letter);
}
// Array
let topics1 =["SQL","Node","React"];
for(let topic of topics1){
  console.log(topic);
}
// Map
let topics = new Map();
topics.set("HTML", "/topic/html");
topics.set("CSS", "/topic/css");
topics.set("JavaScript", "/topic/javascript");
// Print Keys
for (let topic of topics.keys()) { 
console.log(topic);
}
// Print Values
for (let topic of topics.values()) {
console.log(topic);
}
// Print Key Value Pair
for (let topic of topics.entries()) {
  console.log(topic);
}



// Class  -------------------------------------------
class Vehicle {
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }
  describeYourself() {
    console.log(
      `I am a ${this.description} 
          with ${this.wheels} wheels.`
    );
  }
}

let maruti=new Vehicle("CNG Car",4);

console.log(maruti);
maruti.describeYourself();

//   inheritance    -------------------------------------------------
class SemiTruck extends Vehicle{
  constructor(){
      super("Semi Truck",18);
  }
}

let groceryStoreSemi = new SemiTruck();
groceryStoreSemi.describeYourself();



// Getter and Setter    ---------------------------------------
// in Object
let attendance = {
  _list: [],
  set addName(name) {
    this._list.push(name);
  },
  get list() {
    return this._list.join(", ");
  },
};
attendance.addName = "Ankit";
console.log(attendance._list);

attendance.addName = "Ashish";
attendance.addName = "Astharv";
console.log(attendance._list);

// in Class
class Hike {
  constructor(distance, pace) {
    this.distance = distance;
    this.pace = pace;
  }
  get lengthInHours() {
    return `${this.calcLength()} hours`;
  }
  calcLength() {
    return this.distance / this.pace;
  }
}
const mtTallac = new Hike(10, 2);
console.log(mtTallac.lengthInHours);



// .repeat function ------------------------------------------
// on string
let yell = "woo!";
let party = yell.repeat(20);
console.log(party);

// inside object
let cat = {
  meow(times) {
    console.log("meow".repeat(times));
  },
  purr(times) {
    console.log("prrr".repeat(times));
  },
  snore(times) {
    console.log("ZzZzZ".repeat(times));
  },
};
cat.meow(3);
cat.purr(3);
cat.snore(6);



// Promise with Delay Function -----------------------------------------------
const delay = (seconds) =>
  new Promise((resolve, reject) => {    //Use Reject to Handle Error
    if(typeof seconds !=="number"){
        reject(new Error("Seconds must be in number form"))
    }
    setTimeout(resolve, seconds * 1000);
  });

console.log("0 Sec");
delay(1).then(() => console.log("1 sec"));
delay("5").then(() => console.log("5 sec"));


// Loading Remote Data with Promise -----------------------------------------------
const spacePeople=()=>{
  return new Promise((resolves,rejects)=>{
      const api ="http://api.open-notify.org/astros.json";
      const request=new XMLHttpRequest();
      request.open("GET", api);
      request.onload=()=>{
          if(request.status===200){
              resolves(JSON.parse(request.response));
          }else{
              rejects(Error(request.statusText));
          }
      };
      request.onerror=(err)=>rejects(err);
      request.send();
  });
};

spacePeople().then(
  (spaceData) => console.log(spaceData),
  (err) =>
    console.error(new Error("Can't load people"))
);


// Loading Remote Data with Fetch -----------------------------------------------------
let getSpacePeople = () =>
  fetch(
    "http://api.open-notify.org/astros.json"
  ).then((res) => res.json());

let spaceNames = () =>
  getSpacePeople()
    .then((json) => json.people)
    .then((people) => people.map((p) => p.name))
    .then((names) => names.join(", "));

spaceNames().then(console.log);



// Async Await Javascript   ----------------------------------
const delay = (seconds) =>
  new Promise((resolves) =>
    setTimeout(resolves, seconds * 1000)
  );

const countToFive = async () => {
  console.log("zero seconds");
  await delay(1);
  console.log("one second");
  await delay(2);
  console.log("two seconds");
  await delay(3);
  console.log("three seconds");
};

countToFive();


// Async Await with Fetch Javascript   ----------------------------------
const githubRequest = async (login) => {
  let response = await fetch(
    `https://api.github.com/users/${login}`
  );
  let json = await response.json();
  let summary = `${json.login}, ${json.id}`;
  console.log(summary);
};

githubRequest("anksrane");