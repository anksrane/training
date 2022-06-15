"use strict";
//Cart
let cartIcon=document.querySelector('#cart-icon');
let cart=document.querySelector('.cart');
let closeCartIcon=document.querySelector('#close-cart');
var cartContent=document.getElementsByClassName('cart-content')[0];

//Open-close Cart
const cartMovement=function(){
    if(cart.classList.contains("active")){
        cart.classList.remove("active");
    }else{
        cart.classList.add("active");
    }
}
cartIcon.addEventListener('click',cartMovement);
closeCartIcon.addEventListener('click',cartMovement);


if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready);
}else{
    ready();
}

// Making Function
function ready(){
    updatetotal();
    //remove items from cart
    var removeCartButtons=document.getElementsByClassName('cart-remove');
    for(var i=0;i<removeCartButtons.length;i++){
        var removeCartbutton=removeCartButtons[i];
        removeCartbutton.addEventListener('click',removeCartItem);
    }
    //change in Quantity
    var quantityInput=document.getElementsByClassName('cart-quantity');
    for(var i=0;i<quantityInput.length;i++){
        var input=quantityInput[i];
        input.addEventListener('change',quantityChanged);
    }
    //add to cart
    var addCart=document.getElementsByClassName('add-cart');
    for(var i=0;i<addCart.length;i++){
        var addCartbutton=addCart[i];
        addCartbutton.addEventListener("click",addCartClicked);
    }
    //Buy Button Clicked
    var buyButton=document.getElementsByClassName("btn-buy")[0];
    buyButton.addEventListener("click",buyButtonClicked);
}

//Buy Button Clicked
function buyButtonClicked(){
    var cartBox=document.getElementsByClassName('cart-box');
    if(cartBox.length==0){
        alert("You don't have any item for buy. Please add atleast 1 item");

    }else{
        alert("YOur order is successfully placed");
        while(cartContent.hasChildNodes()){
            cartContent.removeChild(cartContent.firstChild);
        }
        updatetotal();
    }
}

//Remove Items from Cart
function removeCartItem(){
    // var buttonClicked=event.target;
    this.parentElement.remove();
    updatetotal();
}

//Quantity Changed
function quantityChanged(event){
    var input=event.target;
    if(isNaN(input.value)||input.value<=0){
        input.value=1;
    }else if(!input.isInteger){
        input.value=Math.floor(input.value);
    }    
    updatetotal();
}


//Add Cart
function addCartClicked(event){
    var inputEvent=event.target;
    var shopProducts=inputEvent.parentElement;
    var title=shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price=shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg=shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg){
    var cartShopBox=document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems=document.getElementsByClassName('cart-content')[0];
    var cartItemsNames=cartItems.getElementsByClassName('cart-product-title');
    for(var i=0;i<cartItemsNames.length;i++){
        if(cartItemsNames[i].innerText==title){
            alert("You have already added this item to cart");
            return;
        }
    }
    var cartBoxContent=`
    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <!-- Remove Cart -->
    <i class="bx bxs-trash-alt cart-remove"></i>
`;
cartShopBox.innerHTML=cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0]
    .addEventListener("click",removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0]
    .addEventListener("change",quantityChanged);
}

//Update Total
function updatetotal(){
    var cartBoxes=cartContent.getElementsByClassName('cart-box');
    var total=0;
    for(var i=0;i<cartBoxes.length;i++){
        var cartBox=cartBoxes[i];
        var priceElement=cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement=cartBox.getElementsByClassName('cart-quantity')[0];
        var price=parseFloat(priceElement.innerText.replace("",""));
        console.log(priceElement.innerText);
        var quantity=quantityElement.value;
        total=total+(price*quantity);
    }
        total=Math.round(total*100)/100;
        document.getElementsByClassName('total-price')[0].innerText=total;        

}