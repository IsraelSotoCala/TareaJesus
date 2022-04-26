var owl = $(".owl-carousel");

owl.owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    navText: ["<img src='../img/arrow-left.svg' alt='Previous'>", "<img src='../img/arrow-right.svg' alt='Next'>"],
    dots: true,
    dotsEach: 1,
    items: 3,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    }
});