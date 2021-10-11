
window.addEventListener('load',function(){
let boton = document.querySelector('#agregarcarrito');
/*let product = document.querySelector('.datos-producto').querySelectorAll('h3') //cada h3 representa un dato del producto*/
let image=document.querySelector('#book-image')
//AGREGADO MARCOS NUEVO PRODUCT DETAIL//
let prodTitle = document.querySelector('#prod-title');
let prodAuthor = document.querySelector('#prod-author');
let prodPrice = document.querySelector('#prod-price');

boton.addEventListener('click',function(){
    let cart=[]
    if(!localStorage.getItem('product')){ //si no hay nada en local storage se guarda cart (array vacio)
        localStorage.setItem('product',cart)
    }else{
      cart=JSON.parse(localStorage.getItem('product')) // parseo array existente en localstorage
    }

    let purchasedProduct={  //producto a guardarse en el carrito
        /* Modificaciones Marcos Nuevo Product Detail
        title:product[0].innerHTML, //al seleccionarse todos los h3 se acceden como un array
        author:product[1].innerHTML,
        price:product[3].innerHTML,
        image:image.src
        */
        title:prodTitle.innerHTML,
        author:prodAuthor.innerHTML,
        price:prodPrice.innerHTML,
        image:image.src
    }

    if(cart.find((el)=>el.title==prodTitle.innerHTML)){ //si el elemento ya esta en el carrito no se agrega

        console.log('ya esta esta en el carrito! no se agrega')

    }else{
        cart.push(purchasedProduct)
    }
    localStorage.setItem('product',JSON.stringify(cart)) //se guarda en localstorage el array nuevamente


})

})