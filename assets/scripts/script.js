let email = document.querySelector("#email");

let nome = document.querySelector("#nome");

let assunto = document.querySelector("#assunto");

let emailOk = false

let nomeOk = false

let assuntoOk = false

let mapa = document.querySelector("#mapa")




function validaNome(){
    console.log(nome.value.length)
    
    let sitNome = document.querySelector("#situacaoNome");
    
    if (nome.value.length<3){
        sitNome.textContent = "Nome Inválido!"
        sitNome.style.color = "red";
    }else{
        sitNome.textContent = "Nome Válido!"
        sitNome.style.color = "green";
        nomeOk = true;
    }
}

function validaEmail(){
    let txtEmail = document.getElementById("txtEmail")
    if(email.value.indexOf('@')==-1 || email.value.indexOf('.com')==-1){
            txtEmail.textContent = "Email Inválido!"
            txtEmail.style.color = "red"
        }else{
        txtEmail.textContent = "Email Válido!"
        txtEmail.style.color = "green"
        emailOk=true;
    }
    
    
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
        if(assunto.value.length>100){
            txtAssunto.textContent = "O texto é maior que o permitido(100 caracteres)"
            txtAssunto.style.color = "red"
        } else{
            txtAssunto.style.display = 'none'
            assuntoOk = true;
        }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk== true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert ("Existem campos inválidos ou vazios! Verifique e tente novamente.")
    }
}

function mapaZoom(){
    mapa.style.width = '80vw';
}

function mapaNormal(){
    mapa.style.width = '40vw'
}


