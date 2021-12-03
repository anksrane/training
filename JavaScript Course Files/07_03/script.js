/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];
console.log("Normal Array ",backpackContents);
backpackContents.push("pencil");
console.log("After Push",backpackContents);
backpackContents.unshift("car");
console.log("After Unshift",backpackContents);
backpackContents.shift("ball");
console.log("After Shift",backpackContents);
console.log(backpackContents.join("-|-"));
backpackContents.pop();
console.log("After Pop",backpackContents);

// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);
