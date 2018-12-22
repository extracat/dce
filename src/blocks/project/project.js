$('.project').each(function () {
  $(this).find('.project__info').clone().addClass('project__info--cloned').appendTo($(this).find('.project__picture'));
});