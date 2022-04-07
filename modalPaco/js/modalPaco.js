
var modal = document.getElementById("ModalPosponer");
var boton = document.getElementById("btnPosponer");
var span = document.getElementsByClassName("cerrar")[0];


boton.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}