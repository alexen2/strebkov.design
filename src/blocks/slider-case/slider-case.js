$('.slider-case').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  // autoplay: true,
  // autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});