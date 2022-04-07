function abrir() {
    $(".modal").css("display", "block");
}

$(".modal").on('click', function(e) {
    $(".modal").css("display", "none");
});

$(".boton-cerrar").on('click', function(e) {
    $(".modal").css("display", "none");
});

$(".modal-contenedor").on('click', function(e) {
    e.stopPropagation()
});

function desplegarSelect() {
    $(".select-existente").css({ "display": "block", "margin-top": "50px" });
    $(".contenedor-existente").css("margin-top", "70px");
}