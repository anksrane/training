'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');
const nav = document.querySelector('.nav');

//Modla View
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//Modal Close
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Smooth Scrolling
btnScrollTo.addEventListener('click',function(e){
  const s1cords=section1.getBoundingClientRect();
  // console.log(s1cords.left+window.pageXOffset,s1cords.top+window.pageYOffset);
  //Type1
  // window.scrollTo(
  //   s1cords.left+window.pageXOffset,
  //   s1cords.top+window.pageYOffset
  //   );

  //Type2
  // window.scrollTo({
  //   left:s1cords.left+window.pageXOffset,
  //   right:s1cords.top+window.pageYOffset,
  //   behavior:'smooth',
  // });

  //Type3
  section1.scrollIntoView({behavior:'smooth'});
});

// //by this approch need to add listerner to every element. slow down performance.
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id=this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   });
// });

//event delegation
document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
    const id=e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
});

//Tabbed Component
const tabs=document.querySelectorAll('.operations__tab');
const tabsContainer=document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click',function(e){
  const clicked=e.target.closest('.operations__tab');
  console.log(clicked);
  if(clicked) {
    //Remove active content
    tabs.forEach(function(t){
      t.classList.remove('operations__tab--active');
    });
    tabsContent.forEach(function(t){
      t.classList.remove('operations__content--active');
    })
    //actiate class
    clicked.classList.add('operations__tab--active');
    //Activate Content Area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
  }
})

//Sticky Navigation Bar
const initialCords=section1.getBoundingClientRect();
console.log(initialCords);
window.addEventListener('scroll',function(){
  console.log(window.scrollY);
  if(window.scrollY>initialCords.top)
    nav.classList.add('sticky');
  else
    nav.classList.remove('sticky');
});

//lazy load images















//Study-------------------------------------------------------------------------------------------------------
// const header=document.querySelector('.header');
// //Create and add element
// const message=document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML='We use etc. <button class="btn btn--close-cookie">Got it!</button>';
// header.append(message);
// //delete element
// document
// .querySelector('.btn--close-cookie')
// .addEventListener('click',function(){
//   message.parentElement.removeChild(message);
// });

// //styles
// message.style.backgroundColor='#37383d';
// message.style.width='120%';
// console.log(message.style.backgroundColor);
// //we can read only inline style by above way.
// //to read actual style which is applied by class use computed style
// console.log(getComputedStyle(message).height);
// //change the style
// message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+30+'px';
// document.documentElement.style.setProperty('--color-primary','orangered');

// const h1=document.querySelector('h1');
// const alertH1=function(e){
//   alert('addEventListener: Great! You are reading the heading :D');
//   setTimeout(()=> h1.removeEventListener('mouseenter',alertH1),1000);
// }

// h1.addEventListener('mouseenter',alertH1);

