let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button Clicked");
    formValidation();
});

// Validate Form Before Sumbit
let formValidation=()=>{
    if(input.value===""){
        msg.innerHTML="Post Can't be Empty...!"
        console.log("Fail");
    }else{
        console.log("Success");
        msg.innerHTML="";
        acceptData();
    }
};

// Save Data in Data Object
let data={};
let acceptData=()=>{
    data["text"]=input.value;
    console.log(data);
    createPost();
};

// Create Post HTML
let createPost=()=>{
    posts.innerHTML+=`
    <div >
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
    </div>
    `;
};

//Delete Post
let deletePost=(e)=>{
    e.parentElement.parentElement.remove();
};

//Edit Post
let editPost=(e)=>{
    input.value=e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};