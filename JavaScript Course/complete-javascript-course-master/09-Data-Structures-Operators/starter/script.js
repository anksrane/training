'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

order:function(starterIndex,mainIndex){
  return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
},

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


//Destructuring Array
const arr=[2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];
//instead of above we can do below
const [x,y,z]=arr;
console.log(x,y,z);
console.log(restaurant.order(2,0));

//Destructuring Object


//Spread Operator
const arr2=[7,8,9];
const bdarr=[1,2,...arr];
console.log(bdarr);