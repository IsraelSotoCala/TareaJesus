$(".desplegar").on('click', function(e) {
    if ($(".desplegable").hasClass("active")) {
        $(".desplegable").removeClass("active");
        $(".desplegar").removeClass("rotar");
    } else {
        $(".desplegable").addClass("active");
        $(".desplegar").addClass("rotar");
    }
})