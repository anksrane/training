let hamburger=document.querySelector('.hamburger');
let mobileNav=document.querySelector('.nav-list');
const openMenu=function(){mobileNav.classList.toggle('open');};
function addRequiredClass(){
    if(window.innerWidth<769){
        document.body.classList.add('mobile');
    }
    else{
        document.body.classList.remove('mobile');
        mobileNav.classList.remove('open');
    }
}
window.onload=addRequiredClass;
window.addEventListener('resize', function(){
    addRequiredClass();
})

/*To Hide Show usig Hamburger */
hamburger.addEventListener('click',openMenu);
let links = document.querySelectorAll('a');
links.forEach(el=>{
    el.addEventListener('click',openMenu);
});
/*Add Active Element*/

// const links = document.querySelectorAll('a');
// links.forEach(el => {
//     el.addEventListener('click', function() {
//         mobileNav.querySelector('.active').classList.remove('active');
//         console.log(el);
//         this.classList.add('active');
//     });
// });
