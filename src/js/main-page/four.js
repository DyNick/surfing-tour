'use strict'

$(document).ready(function() {

    $(".cards__item").click(function(){
        var img = $(this).find('.card__image__img');
        var description = $(this).find('.card__text');
        var title = $(this).find('.card__title');
        var descriptioText = description[0].childNodes[0].nodeValue;
        var descriptioTitle = title[0].childNodes[0].nodeValue;
        var src = img.attr('src');
        $("body").append("<div class='popup'>"+
            "<div class='popup_bg'></div>"+
                "<div class='popup_body'>"+
                    "<span class='close-button close-popup-tour'>"+
                        "<div class='in'>"+
                            "<div class='close-button-block'></div>" +
                            "<div class='close-button-block'></div>" +
                        "</div>"+
                        "<div class='out'>"+
                            "<div class='close-button-block'></div>" +
                            "<div class='close-button-block'></div>" +
                        "</div>"+

                    "</span>"+
                "<img src='"+src+"' class='popup_image' />"+
                "<div class='popup_body_description'>"+
                    "<div class='description-title'></div>"+
                    "<div class='description-cards'></div>"+
                "</div>"+
                "</div>"+
            "</div>");
        $('.description-cards').html(descriptioText);
        $('.description-title').html(descriptioTitle);
        $(".popup").fadeIn(800);
        $(".popup_bg").click(function(){
            $(".popup").fadeOut(800);
            setTimeout(function() {
                $(".popup").remove();
            }, 800);
        });
        $(".close-popup-tour").click(function(){
            $(".popup").fadeOut(1000);
            setTimeout(function() {
                $(".popup").remove();
            }, 1000);
        });
    });

});