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

        if(inputValue.trim() == "" || !inputValue.includes("@")){

            this.style.border="red 1px solid";    //Recuadra el input en rojo

            if(!document.querySelector("#email-error")){ //Lanza el mensaje de error encima del input

                let label = document.querySelector('label[for="mail"]');
                label.innerHTML += '<p class="validation-error" id="email-error">Ingrese un email correcto</p>';
            } 

            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            document.querySelector("#email-error").remove();            
            email.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    password.addEventListener('blur', function(){

        let inputValue=this.value;
        let passLength = inputValue.length;

        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";     
            
            if(!document.querySelector("#pass-error")){ //Lanza el mensaje de error encima del input si no lo tiene

                let label = document.querySelector('label[for="password"]');
                label.innerHTML += '<p class="validation-error" id="pass-error">Este campo es obligatorio</p>';
            } 

            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
            
        }/*else if(passLength < 8){ //Chequea que se hayan ingresado al menos 8 caracteres
            this.style.border="red 1px solid";     
            
            if(!document.querySelector("#pass-length")){ //Lanza el mensaje de error encima del input si no lo tiene

                let label = document.querySelector('label[for="password"]');
                label.innerHTML += '<p class="validation-error" id="pass-length">La contraseña debe tener al menos 8 caracteres</p>';
            } 

            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }*/else{
            document.querySelector("#pass-error").remove();  
            document.querySelector("#pass-length").remove(); 
            password.style.border="black 1px solid";
            notSubmit=false;            
        }
    })

    password.addEventListener('keyup', function(){

        let inputValue = password.value.trim();
        let passLength = inputValue.length;

        //Valida el tamaño mientras se está digitando
        if(passLength < 8){
            this.style.border="red 1px solid";  

            if(!document.querySelector("#pass-length")){ //Lanza el mensaje de error encima del input si no lo tiene

                let label = document.querySelector('label[for="password"]');
                label.innerHTML += '<p class="validation-error" id="pass-length">Debe ingresar al menos 8 caracteres</p>';
            } 

        }else{
            document.querySelector("#pass-length").remove();  
            password.style.border="black 1px solid";
            notSubmit=false;            
        }

        //Valida que se incluyan minúsculas
        let lowerCaseLetters = /[a-z]/g;

        if(!inputValue.match(lowerCaseLetters)){
            this.style.border="red 1px solid";  

            if(!document.querySelector("#pass-lowercase")){ //Lanza el mensaje de error encima del input si no lo tiene

                let label = document.querySelector('label[for="password"]');
                label.innerHTML += '<p class="validation-error" id="pass-lowercase">Debe ingresar al menos 1 caracter en minúscula</p>';
            } 

        }else{
            document.querySelector("#pass-lowercase").remove();  
            password.style.border="black 1px solid";
            notSubmit=false;            
        }

        //Valida que se incluyan mayúsculas
        let upperCaseLetters = /[A-Z]/g;

        if(!inputValue.match(upperCaseLetters)){
            this.style.border="red 1px solid";  

            if(!document.querySelector("#pass-uppercase")){ //Lanza el mensaje de error encima del input si no lo tiene

                let label = document.querySelector('label[for="password"]');
                label.innerHTML += '<p class="validation-error" id="pass-uppercase">Debe ingresar al menos 1 caracter en mayúscula</p>';
            } 

        }else{
            document.querySelector("#pass-uppercase").remove();  
            password.style.border="black 1px solid";
            notSubmit=false;            
        }

        //Valida que se incluyan números
        /*let numbers = /[0-9]/g;
        if(!inputValue.match(numbers)){
            this.style.border="red 1px solid";  

            if(!document.querySelector("#pass-number")){ //Lanza el mensaje de error encima del input si no lo tiene

                let label = document.querySelector('label[for="password"]');
                label.innerHTML += '<p class="validation-error" id="pass-number">Debe ingresar al menos 1 número</p>';
            } 

        }else{
            document.querySelector("#pass-number").remove();  
            password.style.border="black 1px solid";
            notSubmit=false;            
        }*/
    })

    user_name.addEventListener('blur', function(){

        let inputValue=user_name.value.trim();
        let length = inputValue.length;

        if(length <= 1){
            user_name.style.border="red 1px solid";     
            
            if(!document.querySelector("#user-error")){ //Lanza el mensaje de error encima del input

                let label = document.querySelector('label[for="user_name"]');
                label.innerHTML += '<p class="validation-error" id="user-error">Debe ingresar al menos 2 caracteres</p>';
            } 

            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            document.querySelector("#user-error").remove();  
            user_name.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    name.addEventListener('blur', function(){

        let inputValue=name.value.trim();
        let length = inputValue.length;

        if(length <= 1){
            name.style.border="red 1px solid";     
            
            if(!document.querySelector("#name-error")){ //Lanza el mensaje de error encima del input

                let label = document.querySelector('label[for="name"]');
                label.innerHTML += '<p class="validation-error" id="name-error">Debe ingresar al menos 2 caracteres</p>';
            } 

            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            document.querySelector("#name-error").remove();  
            name.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    last_name.addEventListener('blur', function(){

        let inputValue=last_name.value.trim();
        let length = inputValue.length;

        if(length <= 1){
            last_name.style.border="red 1px solid";     
            
            if(!document.querySelector("#last-name-error")){ //Lanza el mensaje de error encima del input

                let label = document.querySelector('label[for="last_name"]');
                label.innerHTML += '<p class="validation-error" id="last-name-error">Debe ingresar al menos 2 caracteres</p>';
            } 

            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            document.querySelector("#last-name-error").remove();  
            last_name.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    form.addEventListener('submit',function(event){
        if(notSubmit){
            event.preventDefault();
        }
        
        
    })

})