$(function(){
   // new WOW().init();

   $('.about__content-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '<img class="slider-arrow slider-arrows-left" src="images/arrows-left.svg" alt=""></img>',
      nextArrow: '<img class="slider-arrow slider-arrows-right" src="images/arrows-right.svg" alt=""></img>',
      autoplay: true,
      autoplaySpeed: 2000,
   });

   $('.recipes-slider').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<img class="slider-arrow recipes-slider-arrow" src="images/recipes-slider-arrow.svg" alt=""></img>',
      nextArrow: false,
      speed: 700,
      cssEase: 'linear',
   });

   $('.social__block-slider').slick({
      prevArrow: '<img class="slider-arrow soc-slider-arrow" src="images/soc-slider__arrow.svg" alt=""></img>',
      nextArrow: false,
      speed: 700,
      autoplay: true,
      fade: true,
      autoplaySpeed: 5000,
   });
});