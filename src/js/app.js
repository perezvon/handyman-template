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

$('.gallery-image').on('click', (e, target) => {
  if (fullscreenImage) {
    $('.bg-overlay').fadeOut().hide();
    $(e.target).css('z-index', '0').css('position', 'inherit').css('width', '300px');
  } else {
    console.log(window.scrollTop)
    $('.bg-overlay').fadeIn().show();
    $(e.target).css('z-index', '1000').css('position', 'absolute').css('top',$(window).scrollTop()).css('left','9%').css('width', '80vw');
  }
  fullscreenImage = !fullscreenImage;
});