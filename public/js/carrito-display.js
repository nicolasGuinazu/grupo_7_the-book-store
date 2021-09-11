window.addEventListener('load',function(){
let cartcontainer=document.querySelector('#cart-container');
let cartArray=JSON.parse(localStorage.getItem('product'))
console.log(cartArray[0])

})