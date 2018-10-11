$(document).ready(function() {
  $('.header__toggle').on('click', menu);

  var x = window.matchMedia('(max-width: 767px)');
  responseListener(x);
  x.addListener(responseListener);
});

function menu() {
  $(this).toggleClass('header__toggle-close');
  $('.header').toggleClass('header--opened');
}

function responseListener(x) {
  if (x.matches) {
    $('.header').removeClass('header--opened');
  } else {
    $('.header__toggle').removeClass('header__toggle-close');
  }
}
