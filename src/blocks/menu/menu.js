$('.menu__btn').on('click', function (e) {
  $(this).toggleClass('menu__btn--active');
  $('.menu__content').slideToggle();
  e.preventDefault();
});