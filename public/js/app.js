$(document).ready(function () {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });


  $('.js-navigation').on('click', 'a', function(e) {
    e.preventDefault();

    const anchor = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(anchor).offset().top
    }, 1000);
  });

  $(document).click(function () {
    $('.languages').removeClass('open');
  });
  $('.languages').on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('open');
  });
  $('.languages').on('click', 'div', function () {
    $('.languages').find('.active').removeClass('active');
    $(this).addClass('active');
  });

  $('.js-team').slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          adaptiveHeight: true
        }
      }
    ]
  });
  $(window).on('resize orientationchange', function() {
    $('.js-team').slick('resize');
  });

  $('.js-hamb').on('click', function () {
    $(this).toggleClass('open');
    $(this).parent().find('.js-navigation').fadeToggle();
  })

});

