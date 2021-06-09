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
		fade: true,
		autoplay: true,
		autoplaySpeed: 2500
	});

	$('.menu__button').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active')
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