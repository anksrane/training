'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  //delete already existing HTML
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'; //if mov>0 then dep/with
    //create html element
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>

      <div class="movements__value">${mov}</div>
    </div>
    `;
    //add element to html
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const createUsernames = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(function (name) {
      return name[0];
    })
    .join('');
  return username;
};

console.log(createUsernames('Steven Thomas Williams'));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//Map Method

// /////////////////////////////////////////////////
// let arr=['a','b','c','d','e'];
// //array slice
// console.log(arr.slice(1)); //only start parameter
// console.log(arr.slice(2,4)); //start & end parameter

// // //splice
// // console.log(arr.splice(4));
// // console.log(arr);

// console.log(arr.at(-1));

// for(const movement of movements){
//   if(movement>0){
//     console.log(`You deposited ${movement}`);
//   }else{
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }console.log('-------------ForEach---------------')
// movements.forEach(function(movement,index){
//   if(movement>0){
//     console.log(`Movement${index+1}: You deposited ${movement}`);
//   }else{
//     console.log(`Movement${index+1}: You withdrew ${Math.abs(movement)}`);
//   }
// })

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt));
console.log(numbers.map(x => x * 2));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//Map
const euroToInr = 82.38;
const eurToUsd = 1.1;
const movementUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementUSD);
