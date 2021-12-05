var addBtn = document.querySelector("#addbottom a");
var popup = document.querySelector("#popupbackground");
var closeBtn = document.querySelector("#popup form a");
addBtn.addEventListener("click", ()=>{
    popup.style.display = "flex";
    popup.style.transition = "display 5s";
})

closeBtn.addEventListener("click", ()=>{
    popup.style.display = "none";
    popup.style.transition = "display 5s";
})

// // Can also be used with $(document).ready()
// $(window).load(function() {
//     $('.flexslider').flexslider({
//       animation: "slide"
//     });
//   });