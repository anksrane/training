'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnsCloseModal=document.querySelectorAll('.show-modal');
console.log(btnsCloseModal);

for(let i=0;i<btnsCloseModal.length;i++)
btnsCloseModal[i].addEventListener('click',function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});
const closeModal=function(){
    
}
btnCloseModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});


