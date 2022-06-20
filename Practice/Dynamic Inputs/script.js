'use strict';
//add & remove mobile number field
const mobile=document.querySelector("#mobileContainer");
const mobileGroup=document.querySelector(".mobile-group");
var mobilesCount=2;
mobile.addEventListener("click",function(event){
    const addMobileBtn=event.target.closest(".addMobile");
    const delMobileBtn=event.target.closest(".deleteMobile");
    if(addMobileBtn!=null){
        if(mobilesCount<=5){
            var div = document.createElement("div");
            div.className="form-group";
            div.classList.add="mobile-group";
            div.innerHTML=`                
            <label for="mobile${mobilesCount}">Mobile</label>
            <input type="tel" class="form-control" id="mobile${mobilesCount}">
            <input type="button" value="Add Another Number" class="addMobile btn btn btn-secondary">
            <input type="button" value="Delete" class="deleteMobile btn btn btn-danger">
            `;
            mobile.appendChild(div);
            mobilesCount=mobilesCount+1;
        }else{
            alert("You Cannot add More than 5 mobile numbers");
        }
    }else if(delMobileBtn!=null){
       var element=delMobileBtn.parentNode;
       element.parentNode.removeChild(element);
       mobilesCount=mobilesCount-1;
    }
});

//add & remove email number field
const email=document.querySelector("#emailContainer");
const emailGroup=document.querySelector(".email-group");
var emailsCount=2;
email.addEventListener("click",function(event){
    const addEmailBtn=event.target.closest(".addEmail");
    const delEmailBtn=event.target.closest(".deleteEmail");
    if(addEmailBtn!=null){
        if(emailsCount<=5){
            var div = document.createElement("div");
            div.className="form-group";
            div.classList.add="email-group";
            div.innerHTML=`                
            <label for="email${emailsCount}">Email</label>
            <input type="email" class="form-control" id="mobile${emailsCount}">
            <input type="button" value="Add Another Email" class="addEmail btn btn btn-secondary">
            <input type="button" value="Delete" class="deleteEmail btn btn btn-danger">
            `;
            email.appendChild(div);
            emailsCount=emailsCount+1;
        }else{
            alert("You Cannot add More than 5 Email ID's");
        }
    }else if(delEmailBtn!=null){
       var element=delEmailBtn.parentNode;
       element.parentNode.removeChild(element);
       emailsCount=emailsCount-1;
    }
});

//Validations on Form and Save Data
var form=document.getElementById("form");
var saveForm=document.getElementById("submit");
var firstName=document.getElementById("firstName");
var middleName=document.getElementById("middleName");
var lastName=document.getElementById("lastName");

var obj=new Object();
form.addEventListener("submit",function(event){
    event.preventDefault();
    var mobileInputs=form.querySelectorAll('input[type="tel"]');
    var emailInputs=form.querySelectorAll('input[type="email"]');
    // if(firstName.value==""||middleName.value==""||lastName.value==""){
    //     alert("Please enter your full name");
    // }else{

        obj['firstname']=firstName.value;
        obj['middleName']=middleName.value;
        obj['lastName']=lastName.value;
        obj['mobileNumbers']=[];
        obj['emails']=[];
        for(let i=0;i<mobileInputs.length;i++){
            console.log(mobileInputs[i].value);
            obj['mobileNumbers'].push(mobileInputs[i].value);
         }
        for(let j=0;j<emailInputs.length;j++){
            console.log(emailInputs[j].value);
            obj['emails'].push(emailInputs[j].value);
         }
         console.log(obj);
    // }
});