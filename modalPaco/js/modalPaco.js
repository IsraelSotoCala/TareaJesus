
$("#btnPosponer").on('click', function() {
  $(".ModalCompleto").css("display", "block");
});
///Cerrar con X
$(".cerrar").on('click', function() {
    $(".ModalCompleto").css("display", "none");
});

//Cerrar Pulsando fuera
$(".ModalCompleto").on('click', function() {
    $(".ModalCompleto").css("display", "none");
});


//
$('.ModalPosponer').on('click', function(e) {
   e.stopPropagation();

});