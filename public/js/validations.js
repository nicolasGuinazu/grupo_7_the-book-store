window.addEventListener('load',function(){
    let emailError=false;
    let passwordError=false;
    let button=document.querySelector('#button-submit');
    let form=document.querySelector('form');
    let email=document.querySelector('#email');
    let password=document.querySelector('#password');
    let errorMessageEmail=document.querySelector('#error-mail');
    let errorMessagePass=document.querySelector('#error-pass');
    let body=document.querySelector('body');

    email.addEventListener('change',function(){
        let inputValue=this.value;
        if(inputValue.trim() == "" || !inputValue.includes("@")){
            email.style.border="red 1px solid";
            errorMessageEmail.innerText=`Debes introducir un email`
            emailError=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            email.style.border="black 1px solid";
            errorMessageEmail.innerText=""
        }
    })
    
    password.addEventListener('change',function(){
        let inputValue=this.value;
        if(inputValue.trim() == ""){
            errorMessagePass.innerText=`Debes introducir un password`
            password.style.border="red 1px solid"
            passwordError=true
        }else{
            password.style.border="black 1px solid";
            errorMessagePass.innerText=''
        }
    })

    form.addEventListener('submit',function(event){
        if(emailError || passwordError){
            event.preventDefault();
        }
        
        
    })
})

