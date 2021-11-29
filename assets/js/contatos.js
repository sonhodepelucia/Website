var recebidos =
  JSON.parse(localStorage.getItem("@sonhosdepelucia/recebido")) || [];
var contato = document.getElementById("contato");

contato.addEventListener("submit",(event)=>{
  event.preventDefault();

  const formData = new FormData(event.target);
  const info = Object.fromEntries(formData);

  recebidos.push(info);
  localStorage.setItem("@sonhosdepelucia/recebido", JSON.stringify(recebidos));
  alert("Mensagem enviada com sucesso!");
  contato.reset();
});