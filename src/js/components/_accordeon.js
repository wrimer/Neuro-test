$(document).ready(function() {

  $('.faq__item').on('click', accordeon);
});

function accordeon() {
  $(this).toggleClass('faq__item--active');
}
