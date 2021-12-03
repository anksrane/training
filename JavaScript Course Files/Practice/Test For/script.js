var array=['a','b','c','d','e'];
var object = { a: 1, b: 2, c: 3 };
console.log("Normal For Loop");
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

console.log("For Of Loop");
for(let i of array){
    console.log(i);
}

console.log("For Each Loop");
array.forEach(function(i){
  console.log(i);
});

console.log("For in Loop; Only Applied to Objects");
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

console.log("Map Array");
const arrayItem=array.map(function(i){
  console.log(i);
  return i;
});
console.log("OG",array);
console.log("Map",arrayItem);
arrayItem.forEach(i=>console.log(i));

