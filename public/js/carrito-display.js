window.addEventListener("load", function () {
  let cartcontainer = document.querySelector("#cart-container");
  let cartArray = JSON.parse(localStorage.getItem("product"));

  for (i = 0; i < cartArray.length; i++) {
    cartcontainer.innerHTML += `<div class="cart-card"><p>${cartArray[i].title}</p><p>${cartArray[i].author}</p><p>${cartArray[i].price}</p><button class="erase">X</button></div>`;
  }
  for (i = 0; i < cartcontainer.children.length; i++) {
    cartcontainer.children[i].addEventListener("click", (event) => {
      console.log(event.target.parentElement.children[0].innerText);
      let newcart = cartArray.filter(
        (el) => el.title != event.target.parentElement.children[0].innerText
      );
      localStorage.setItem("product", JSON.stringify(newcart));
      location.reload();
    });
  }
});
