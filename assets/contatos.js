var nome = document.getElementById("nome")
var whatsapp = document.getElementById("whatsapp")
var email = document.getElementById("email")
var mensagem = document.getElementById("mensagem")
var btnEnviar = document.getElementById("enviar")
var contato = document.getElementById("contato")

btnEnviar.addEventListener("submit", event =>{
    event.preventDefault();

    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData)

    console.log(info)

    alert("Mensagem enviada com sucesso!")
} )