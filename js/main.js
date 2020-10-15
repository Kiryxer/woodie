$(function () {

  $('.menu__button').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });

  $('.testimony__slider').slick({
    autoplay: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev slick-btn">Previous</button>',
    nextArrow: '<button type="button" class="slick-next slick-btn">Next</button>',
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          autoplay: true
        }
      }
    ]
  });
});
