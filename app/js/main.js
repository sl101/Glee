$(function(){

	$('.top-slider__inner').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2500
	});

	$('.partners__content').slick({
		dots: false,
		arrows: false,
		// autoplay: true,
		// autoplaySpeed: 2500,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.menu__button').on('click', function(){
		$('.menu__list, .menu__button').toggleClass('active');
		$('.header__wrapper').toggleClass('header__wrapper--active');
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			$('body').toggleClass('lock');
		} else {
			var scrollWidth = window.innerWidth-document.documentElement.clientWidth;
			$('body').toggleClass('lock');
			$('body, .header').css('padding-right', scrollWidth);
		} 
	});

	let container_gallery = document.querySelector('[data-ref="gallery"]');
  let container_design = document.querySelector('[data-ref="design"]');

	let config = {
    controls: {
      scope: 'local'
    }
  };

		let mixer_gallery = mixitup(container_gallery, config);
		let mixer_design = mixitup(container_design, config);
		
});