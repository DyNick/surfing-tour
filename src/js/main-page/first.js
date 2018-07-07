'use strict'

$(document).ready(function() {
    $('.container--first').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        margin: 30,
        dots: true,
        nav: true,
        autoplayTimeout: 10000,
        smartSpeed: 5000,
        navSpeed: 5000,
        touchDrag: true,
        mouseDrag: true
    })
})