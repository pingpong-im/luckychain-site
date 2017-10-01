'use strict';

$(document).ready(function () {
    $('.js-partners').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('.js-media').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('.js-accordion').first().addClass('open').find('.js-content').slideDown();

    $('.js-accordion').on('click', function () {

        if($(this).hasClass('open')) {

            $(this).removeClass('open')
                .find('.js-content')
                .slideUp();

            return;

        }

        $(this).parent()
            .find('.js-accordion.open')
            .removeClass('open')
            .find('.js-content')
            .slideUp();

        $(this).toggleClass('open');
        $(this).find('.js-content').slideToggle();

    });

});