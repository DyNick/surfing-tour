'use strict'
$(document).ready(function($){
    $('.hamburger').on('click', function(event){
        event.preventDefault();
        $('.mobile-navigation').addClass('is-visible');
    });

    $('.close-popup-menu').click(function(){
        $('.mobile-navigation').removeClass('is-visible');
    });
    $(document).keyup(function(event){
        if(event.which==='27'){
            $('.mobile-navigation').removeClass('is-visible');
        }
    });
});