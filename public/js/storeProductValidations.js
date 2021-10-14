window.addEventListener('load',function(){

    let nameOk=false
    let authorOk=false
    let editorialOk=false
    let isbnOk=false
    let genderOk=false
    let formatOk=false
    let priceOk=false
    let synopsisOk=false
    let nameLabel=document.querySelector('#name-label');
    let editorialLabel = document.querySelector('#editorial-label');
    let isbnLabel = document.querySelector('#isbn-label');
    let synopsisLabel = document.querySelector('#synopsis-label');
    let genderLabel = document.querySelector('#gender-label');
    let formatLabel = document.querySelector('#format-label');
    let priceLabel = document.querySelector('#price-label');
    let name = document.querySelector('#name');
    let author = document.querySelector('#author');
    let editorial = document.querySelector('#editorial');
    let isbn = document.querySelector('#isbn');
    let synopsis = document.querySelector('#synopsis');
    let gender = document.querySelector('#gender');
    let format = document.querySelector('#format');
    let price = document.querySelector('#price');
    let button = document.querySelector('#button-submit');

    name.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";
            nameLabel.innerHTML = '<p style="color:red">Debes escribir el nombre del libro</p>'
            nameOk=false;
        }else{
            nameLabel.innerHTML = ''
            name.style.border="black 1px solid";
            nameOk=true;

        }
    })

    author.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";
            authorOk=false;

        }else{
            author.style.border="black 1px solid";
            authorOk=true;

        }
    })

    editorial.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";
            editorialLabel.innerHTML = '<p style="color:red">Debes escribir el nombre de la editorial</p>'
            editorialOk=false;
        }else{
            editorialLabel.innerHTML = ''
            editorial.style.border="black 1px solid";
            editorialOk=true;

        }
    })

    isbn.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";
            isbnLabel.innerHTML = '<p style="color:red">Debes escribir el isbn</p>'
            isbnOk=false;
        }else{
            isbnLabel.innerHTML = ''
            isbn.style.border="black 1px solid";
            isbnOk=true;

        }
    })

    synopsis.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";
            synopsisLabel.innerHTML = '<p style="color:red">Debes escribir la synopsis</p>'
            synopsisOk=false;
        }else{
            synopsisLabel.innerHTML = ''
            synopsis.style.border="black 1px solid";
            synopsisOk=true;

        }
    })

    gender.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";
            genderLabel.innerHTML = '<p style="color:red">Debes elegir el genero</p>'
            genderOk=false;
        }else{
            genderLabel.innerHTML = ''
            gender.style.border="black 1px solid";
            genderOk=true;

        }
    })


    format.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";
            formatLabel.innerHTML = '<p style="color:red">Debes elegir el formato</p>'
            formatOk=false;
        }else{
            formatLabel.innerHTML = ''
            format.style.border="black 1px solid";
            formatOk=true;

        }
    })

    price.addEventListener('blur', function(){

        let inputValue=this.value;
        if(inputValue.trim() == ""){
            this.style.border="red 1px solid";
            priceLabel.innerHTML = '<p style="color:red">Debes darle un precio</p>'
            priceOk=false;
        }else{
            priceLabel.innerHTML = ''
            price.style.border="black 1px solid";
            priceOk=true;

        }
    })


    button.addEventListener('click',function(event){

        if(!nameOk || !authorOk || !editorialOk || !isbnOk || !genderOk || !formatOk || !priceOk || !synopsisOk){
            event.preventDefault();
            button.style.backgroundColor="grey";
            button.style.disabled;
            button.style.cursor='not-allowed';
        }else{
            button.style.cursor='pointer';
            button.style.backgroundColor="green";
        }



    })

})