var addBtn = document.querySelector("#addbottom a");
var popup = document.querySelector("#popupbackground");
var closeBtn = document.querySelector("#popup form a");
var form = document.getElementById("pou")

addBtn.addEventListener("click", ()=>{
    popup.style.display = "flex";
    popup.style.transition = "display 5s";
})

closeBtn.addEventListener("click", ()=>{
    popup.style.display = "none";
    popup.style.transition = "display 5s";
})

// tentando colocar um botão de envio
var closeBtn = document.querySelector("#env");

closeBtn.addEventListener("click", ()=>{
    popup.style.display = "none";
    popup.style.transition = "display 5s";
})

var recebidos =
  JSON.parse(localStorage.getItem("@sonhosdepelucia/recebido")) || [];
var contato = document.getElementById("popup");

form.addEventListener("submit",(event)=>{
  event.preventDefault();

  const formData = new FormData(event.target);
  const info = Object.fromEntries(formData);

  recebidos.push(info);
  localStorage.setItem("@sonhosdepelucia/recebido", JSON.stringify(recebidos));
  alert("Mensagem enviada com sucesso!");
  form.reset();
});



// // Can also be used with $(document).ready()
// $(window).load(function() {
//     $('.flexslider').flexslider({
//       animation: "slide"
//     });
//   });
// // Can also be used with $(document).ready()
// $(window).load(function() {
//     $('.flexslider').flexslider({
//       animation: "slide"
//     });
//   });