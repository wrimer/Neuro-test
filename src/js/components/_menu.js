$(document).ready(function() {
  $('.header__toggle').on('click', menu);

  var x = window.matchMedia('(max-width: 767px)');
  responseListener(x);
  x.addListener(responseListener);
});

function menu() {
  $(this).toggleClass('header__toggle-close');
  $('.header__menu').slideToggle(400);
}

function responseListener(x) {
  if (x.matches) {
    $('.header__menu').css({'display': 'none'});
  } else {
    $('.header__menu').css({'display': 'flex'});
    $('.header__toggle').removeClass('header__toggle-close');
  }
}
