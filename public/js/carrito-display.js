window.addEventListener("load", function () {
  let cartcontainer = document.querySelector("#cart-container");
  let cartArray = JSON.parse(localStorage.getItem("product"));

  for (i = 0; i < cartArray.length; i++) { //renderiza cada elemento del carrito en el DOM 
    cartcontainer.innerHTML += `<div class="cart-card"><p>${cartArray[i].title}</p><p>${cartArray[i].author}</p><p>${cartArray[i].price}</p><button class="erase">X</button></div>`;
  }
  for (i = 0; i < cartcontainer.children.length; i++) { //cartcontainer (div que contiene los productos) es elemento padre, se accede a los children
    cartcontainer.children[i].addEventListener("click", (event) => { //a cada child se agrega un eventlistener cuando se hace click
      let newcart = cartArray.filter(  //nuevo array con todos los elementos menos el clickeado(el que se borra)
        (el) => el.title != event.target.parentElement.children[0].innerText
      );
      localStorage.setItem("product", JSON.stringify(newcart));
      location.reload(); //recarga la pagina para poder ver la actualizacion del DOM
    });
  }
});
