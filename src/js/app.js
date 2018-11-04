// JS Goes here - ES6 supported

Splitting();

let isOpen = false;

$('.mobile-nav-menu').on('click', (e, target) => {
  if (isOpen) {
    $('.navigation').css('right', '-1000px');
    $('.close-button').css('display', 'none');
    $('.mobile-nav-menu').html('MENU');
  } else {
    $('.navigation').css('right', 0);
    $('.close-button').css('display', 'block');
    $('.mobile-nav-menu').html('X');
  }
  isOpen = !isOpen;
})