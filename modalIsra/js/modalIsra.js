$(".boton-abrir").on('click', function() {
    $(".modal").css("display", "block");
});

$(".modal").on('click', function(e) {
    $(".modal").css("display", "none");
});

$(".boton-cerrar").on('click', function(e) {
    $(".modal").css("display", "none");
});

$(".modal-contenedor").on('click', function(e) {
    e.stopPropagation()
});

$(".opcion-existente").on('click', function() {
    $(".select-existente").css({ "display": "block", "margin-top": "50px", "padding": "10px" });
    $(".contenedor-existente").css("margin-top", "90px");
});