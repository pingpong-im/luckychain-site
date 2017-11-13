$(document).ready(function () {

  // Slider
  $('.js-partners').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.js-advisers').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          autoplay: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false
        }
      }
    ]
  });
  $('.js-team').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          autoplay: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false
        }
      }
    ]
  });

  $('.js-features').slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 1180,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true
        }
      }
    ]
  });
  $(window).on('resize orientationchange', function() {
    $('.js-features').slick('resize');
  });

  // News Accordion
  $('.js-accordion').on('click', function () {
    $(this).parent().find('.js-accordion-content').slideToggle();
    $(this).toggleClass('open');
  });

  // Last block buttons
  $('#yes').on('click', function () {
    $('html, body').animate({scrollTop: 0}, "slow");
    return false;
  });
  $('#no').on('click', function () {
    $('#newsletter').fadeIn();
    $('.modal-overlay').fadeIn();
    $('html').addClass('modal-open');
  });

  // Modals
  $('.js-wp-open').on('click', function () {
    $('#download').fadeIn();
    $('.modal-overlay').fadeIn();
    $('html').addClass('modal-open');
  });
  $('.js-buy-modal').on('click', function () {
    $('#buy-tokens').fadeIn();
    $('.modal-overlay').fadeIn();
    $('html').addClass('modal-open');
  });

  $('.modal-overlay').on('click', function () {
    $(this).fadeOut();
    $('#newsletter').fadeOut();
    $('#download').fadeOut();
    $('html').removeClass('modal-open');

    $('#map').removeClass('next-step');
    $('.js-phrases').fadeOut();
    $('.js-click').fadeIn();
    $('.js-form').fadeOut();
  });
  $('.js-close-modal').on('click', function () {
    $(this).parent().fadeOut();
    $('.modal-overlay').fadeOut();
    $('html').removeClass('modal-open');
  });

  // Man button

  setTimeout(function () {
    $('#man').animate(
      {'left': '100'},
      {
        complete: function () {
          $('.js-click').fadeIn();
        }
      }
    );
  }, 5000);

  $('.js-click').on('click', function () {
    $(this).fadeOut().parent().addClass('next-step');
    $('.modal-overlay').fadeIn();
    $('.js-phrases').fadeIn();
    $('html').addClass('modal-open');
  });

  $('.js-buy').on('click', function () {
    $('.js-form').fadeToggle();
    $('.js-phrases').fadeToggle();
  });

  // Converter
  $('.currency').on('click', function () {
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');

    checkClass();
  });
  $('.converter').find('input').on('focus', function () {
    $('.converter').find('.change').removeClass('change');
    $(this).addClass('change');
    checkClass();
  });

  // Language dropdown
  $(document).click(function () {
    $("#locale").removeClass('open');
  });
  $('#locale').on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('open');
  });
  $('#locale').on('click', 'a', function () {
    $('#locale').find('.active').removeClass('active');
    $(this).addClass('active');
  })

  $('.js-hamb').on('click', function () {
    $(this).toggleClass('open');
    $('.js-menu').slideToggle();
  })

});

function checkClass() {
  if ($('#currency').hasClass('change')) {

    switch ($('.converter').find('.active').data('currency')) {
      case 'bit':
        currToToken(0.0014);
        break;
      case 'eth':
        currToToken(0.018);
        break;
      default:
        currToToken(0.0014);
    }

  }
  else if ($('#tokens').hasClass('change')) {

    switch ($('.converter').find('.active').data('currency')) {
      case 'bit':
        tokenToCurr(0.0014);
        break;
      case 'eth':
        tokenToCurr(0.018);
        break;
      default:
        tokenToCurr(0.0014);
    }

  }
}

function currToToken(k) {
  $('#tokens').val(Math.round(($('#currency').val() / k) * 10000) / 10000);

  $('#currency').on('change paste keyup', function () {
    checkNumbers($(this));
    $('#tokens').val(Math.round(($(this).val() / k) * 10000) / 10000);

  })
}

function tokenToCurr(k) {
  $('#currency').val(Math.round(($('#tokens').val() * k) * 10000) / 10000);

  $('#tokens').on('change paste keyup', function () {
    checkNumbers($(this));
    $('#currency').val(Math.round(($(this).val() * k) * 10000) / 10000);
  })
}

function checkNumbers(input) {
  var value = input.val(),
    test_regex = /(^$)|(^\d+([,.]\d+)?$)/,
    result = test_regex.test(value);

  if (!result) {
    input.addClass('error');
  } else {
    input.removeClass('error');
  }
}

