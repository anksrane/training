/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


 const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "lightbulb",
    "usb drive",
  ];
  console.log("----------Print Array----------");
  for (let index = 0; index < deskArray.length; index++) {
    console.log(deskArray[index]);      
  }
//   deskArray.pop();
//   console.log("After Pop",deskArray);

deskArray.unshift("5","15");
console.log("After Unshift",deskArray);

deskArray.unshift(deskArray.pop());
console.log("After Pop:",deskArray);

deskArray.sort();
console.log("After Sort:",deskArray);

const findItem=deskArray.find(item=>item==="lightbulb");
console.log("Found Item:",findItem);

let remove="lightbulb";
deskArray.splice(deskArray.indexOf(remove),1);
console.log('Array with',remove,'removed:',deskArray);