window.addEventListener('load',function(){
    let burgerButton = document.querySelector('#burgerButton');
    let sideBar = document.querySelector('#mySidebar');
    let closeBtn = document.querySelector('#closebtn');

    burgerButton.addEventListener('click',function(){

        sideBar.style.width = "250px";

    })

    closeBtn.addEventListener('click', function(){

        sideBar.style.width = '0px';

    })
    
    })