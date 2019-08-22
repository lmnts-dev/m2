'use strict';

var slider = $('#team-slider .inner .container');

var sliderContainer = $('#team-slider');

$(document).ready(function () {
  slider.slick({
    arrows: false
  });
});

$('div[data-nav="next"]').click(function () {
  slider.slick('slickNext');
});

$('div[data-nav="prev"]').click(function () {
  slider.slick('slickPrev');
});

$('div[data-nav="exit"]').click(function () {
  toggleSlider();
});

$('div[data-member]').click(function () {
  goToSlide($(this).attr('data-member'));
  toggleSlider();
});

function goToSlide(slideIndex) {
  slider.slick('slickGoTo', slideIndex + ', ' + true);
}

function toggleSlider() {
  if (sliderContainer.hasClass('visible-slider')) {
    sliderContainer.removeClass('visible-slider');
  } else {
    sliderContainer.addClass('visible-slider');
  }
}