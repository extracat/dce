$('.front').slick({
  prevArrow : '<span class="slick-prev"></span>',
  nextArrow : '<span class="slick-next"></span>',
  dots : true,
  autoplay: true
}).on('setPosition', function (event, slick) {
    slick.$slideTrack.find('.slick-slide').css('height', slick.$slideTrack.height() + 'px');
});;