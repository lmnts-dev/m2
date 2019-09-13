// Team slider functions

let slider = $('#team-slider .inner .container');

let sliderContainer = $('#team-slider');

$( document ).ready(function() {
  slider.slick({
    arrows: false,
    adaptiveHeight: true,
  });
});

$('div[data-nav="next"]').click(function() {
  slider.slick( 'slickNext');
});

$('div[data-nav="prev"]').click(function() {
  slider.slick('slickPrev');
});

$('div[data-nav="exit"]').click(function() {
  toggleSlider();
});

$('div[data-member]').click(function() {
  goToSlide( $(this).attr('data-member') );
  toggleSlider();
});

function goToSlide( slideIndex ) {
  slider.slick('slickGoTo', slideIndex + ', ' + true );
}

function toggleSlider() {
  if ( sliderContainer.hasClass('visible-slider') ) {
    sliderContainer.removeClass( 'visible-slider' );
  } else {
    sliderContainer.addClass('visible-slider');
  }
}


// Nav scroll functions

$(window).scroll(function() {
let scrollPosition = $('body, html').scrollTop();
if (scrollPosition != 0) {
  $('header svg').removeClass('large');
  $('header nav').removeClass('no-scroll');
  $('header').removeClass('no-background');
} else {
  $('header svg').addClass('large');
  $('header nav').addClass('no-scroll');
  $('header').addClass('no-background');
}
});


// Contact modal functions
$('div[data-contact="exit"]').click(function() {
  toggleModal();
});

$('div[data-contact="open"]').click(function() {
  toggleModal();
});


function toggleModal() {
  let modal = $('#contact-modal');
  if (modal.hasClass('visible-modal')) {
    modal.removeClass('visible-modal');
  } else {
    modal.addClass('visible-modal');
  }
}

