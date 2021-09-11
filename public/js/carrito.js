
window.addEventListener('load',function(){
let boton = document.querySelector('#agregarcarrito');
let product = document.querySelector('.datos-producto').querySelectorAll('h3')

boton.addEventListener('click',function(){
    let cart=[]
    if(!localStorage.getItem('product')){
        localStorage.setItem('product',cart)
    }else{
      cart=JSON.parse(localStorage.getItem('product'))
    }
    let purchasedProduct={
        title:product[0].innerHTML,
        author:product[1].innerHTML,
        price:product[2].innerHTML
    }
    cart.push(purchasedProduct)
    localStorage.setItem('product',JSON.stringify(cart))
    
    
})
})