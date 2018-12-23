// scrollbar width
let div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
div.style.visibility = 'hidden';
document.body.appendChild(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
document.body.removeChild(div);

let animationSpeed = 500;

// open popup
// деактивировал пока функцию. пока не понятно как открывать в попапе разные страницы
function openPopup() {
  $('.js-popup-open').on('click', function (e) {

    if ($(this).attr("href") == "EDIT--ME") { 
      $('.modal').fadeIn(animationSpeed);
      $('html').css({
        'padding-right': scrollWidth,
        'overflow': 'hidden'
      });
      e.preventDefault();
    }

    if ($(this).attr("href") == "EDIT--ME") { 
      $('.modal').fadeIn(animationSpeed);
      $('html').css({
        'padding-right': scrollWidth,
        'overflow': 'hidden'
      });
      e.preventDefault();
    }

  });
}

openPopup();

// close popup
function closePopup() {
  $('.js-popup-close').on('click', function (e) {
    $('.modal').fadeOut(animationSpeed, function () {
      $('html').removeAttr('style');
    });
    e.preventDefault();
  });
}

closePopup();

// if mobile remove click event from services links
function isMobile() {
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.js-popup-open').off('click');
  } else {
    $('.js-popup-open').off('click');
    openPopup();
  }
}

isMobile();

$(window).on('resize', function () {
  isMobile();
});



