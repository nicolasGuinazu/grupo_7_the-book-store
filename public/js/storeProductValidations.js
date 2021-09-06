const { is } = require("sequelize/types/lib/operators");

window.addEventListener('load',function(){

    let notSubmit = false;
    let name = document.querySelector('#name');
    let author = document.querySelector('#author');
    let editorial = document.querySelector('#editorial');
    let isbn = document.querySelector('#isbn');
    let synopsis = document.querySelector('#synopsis');
    let gender = document.querySelector('#gender');
    let format = document.querySelector('#format');
    let price = document.querySelector('#price');
    let button = document.querySelector('#button-submit');
    let form = document.querySelector('form');

    name.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";       
            this.innerHTML += '<p class="validation-error">Error</p>'     
            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            name.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    author.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";       
            this.innerHTML += '<p class="validation-error">Error</p>'     
            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            author.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    editorial.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";       
            this.innerHTML += '<p class="validation-error">Error</p>'     
            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            editorial.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    isbn.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";       
            this.innerHTML += '<p class="validation-error">Error</p>'     
            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            isbn.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    synopsis.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";       
            this.innerHTML += '<p class="validation-error">Error</p>'     
            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            synopsis.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    gender.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";       
            this.innerHTML += '<p class="validation-error">Error</p>'     
            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            gender.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    gender.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";       
            this.innerHTML += '<p class="validation-error">Error</p>'     
            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            gender.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    format.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";       
            this.innerHTML += '<p class="validation-error">Error</p>'     
            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            format.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    price.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";       
            this.innerHTML += '<p class="validation-error">Error</p>'     
            notSubmit=true
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            price.style.border="black 1px solid";
            notSubmit=false;
            
        }
    })

    form.addEventListener('submit',function(event){
        if(notSubmit){
            event.preventDefault();
        }    
        
    })

})