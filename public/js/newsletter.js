window.addEventListener('load',function(){

    let message=document.getElementById('newsletter')
    let button=document.getElementById('send')
    let mail=document.getElementById('mail')
    message.innerText='Subcripcion exitosa! Te llegaran las noticias a :'
    message.innerHTM=''
    mail.addEventListener('change',function(){
        message.innerHTML+=mail.value
    })

    button.addEventListener('click',function(){
            if (mail.value.length>0){

                message.style.display='block'
                setTimeout(()=>{
                 message.style.display='none'
                },2000)
            }

         })
    })