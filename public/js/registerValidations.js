window.addEventListener('load',function(){

    let notSubmit = false;
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let user_name = document.querySelector('#user_name');
    let name = document.querySelector('#name');
    let last_name = document.querySelector('#last_name');
    let birth_date = document.querySelector('#birth_date');
    let phone_number = document.querySelector('#phone_number');
    let button = document.querySelector('#button-submit');
    let form = document.querySelector('form');

    email.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";       
            this.innerHTML += '<p class="validation-error">Error</p>'     
            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            email.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })


    password.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";            
            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            email.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    form.addEventListener('submit',function(event){
        if(notSubmit){
            event.preventDefault();
        }
        
        
    })

})