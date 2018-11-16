// JS Goes here - ES6 supported

Splitting();

let isOpen = false;
let fullscreenImage = false;

$('.mobile-nav-menu').on('click', (e, target) => {
  if (isOpen) {
    $('.navigation').css('right', '-1000px');
    $('.close-button').css('display', 'none');
    $('.mobile-nav-menu').html('MENU');
    $('.mobile-header').css('display', 'block');
  } else {
    $('.navigation').css('right', 0);
    $('.close-button').css('display', 'block');
    $('.mobile-nav-menu').html('X');
    $('.mobile-header').css('display', 'none');
  }
  isOpen = !isOpen;
});

$('.bg-overlay').on('click', (e, target) => {
  $('.bg-overlay').fadeOut().hide();
  $('.lightbox-image').attr('src', null).fadeOut().hide();
  console.log($('.lightbox-image').attr('src'))
  fullscreenImage = !fullscreenImage;
});

$('.lightbox-image').on('click', (e, target) => {
  $('.bg-overlay').fadeOut().hide();
  $('.lightbox-image').attr('src', null).fadeOut().hide();
  console.log($('.lightbox-image').attr('src'))
  fullscreenImage = !fullscreenImage;
});

$('.gallery-image').on('click', (e, target) => {
  if (fullscreenImage) {
    $('.bg-overlay').fadeOut().hide();
    $('.lightbox-image').attr('src', null).fadeOut().hide();
  } else {
    $('.bg-overlay').fadeIn().show();
    $('.lightbox-image').fadeIn().show().css('display', 'block').css('top',$(window).scrollTop() + 50).attr('src', e.target.src);
  }
  fullscreenImage = !fullscreenImage;
});

$('.gallery-container').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});