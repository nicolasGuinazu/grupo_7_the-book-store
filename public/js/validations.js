window.addEventListener('load',function(){
    let emailError=false;
    let passwordError=false;
    let button=document.querySelector('#button-submit');
    let form=document.querySelector('form');
    let email=document.querySelector('#email');
    let password=document.querySelector('#password');
    email.addEventListener('change',function(){
        let inputValue=this.value;
        if(inputValue.length == ""){
            email.style.border="red 1px solid";
            emailError=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            email.style.border="black 1px solid";
            
        }
    })
    
    password.addEventListener('change',function(){
        let inputValue=this.value;
        if(inputValue.length == ""){
            password.style.border="red 1px solid"
            passwordError=true
        }else{
            password.style.border="black 1px solid";
        }
    })

    form.addEventListener('submit',function(event){
        if(emailError || passwordError){
            event.preventDefault();
        }
        
        
    })
})

