$(function() {


  // Кнопка "shown"

  var div = $('.advantage');

  $(window).scroll(function() {
	if ($(window).scrollTop() > 200) {
	  div.addClass('show');
	} else {
	  div.removeClass('show');
	}
  });



  $('.sl').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.sl2',
      focusOnSelect: true,
      arrows: false
    });

  	$('.sl2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.sl',
      focusOnSelect: true,
      swipeToSlide: true,
      infinite: true,
      centerMode: true,
      centerPadding: '0',
      arrows: false
    });
});

$('.sl3').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      infinite: true,
      dots: true
    });

