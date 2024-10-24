// JavaScript Document


$(window).on('load', function () {

	"use strict";


	/*----------------------------------------------------*/
	/*	Preloader
	/*----------------------------------------------------*/

	var preloader = $('#loading'),
		loader = preloader.find('#loading-center-absolute');
	loader.fadeOut();
	preloader.delay(400).fadeOut('slow');

});

$(document).ready(function () {
	$(document.body).vide("../video/rdesk"); // Non declarative initialization

	var instance = $(document.body).data("vide"); // Get instance
	var video = instance.getVideoObject(); // Get video object
	instance.destroy(); // Destroy instance
});
$(window).on('scroll', function () {

	"use strict";


	/*----------------------------------------------------*/
	/*	Navigtion Menu Scroll
	/*----------------------------------------------------*/

	var b = $(window).scrollTop();

	if (b > 80) {
		$(".wsmainfull").addClass("scroll");
	} else {
		$(".wsmainfull").removeClass("scroll");
	}

});


$(document).ready(function () {

	"use strict";


	new WOW().init();


	/*----------------------------------------------------*/
	/*	ScrollUp
	/*----------------------------------------------------*/

	$.scrollUp = function (options) {

		// Defaults
		var defaults = {
			scrollName: 'scrollUp', // Element ID
			topDistance: 600, // Distance from top before showing element (px)
			topSpeed: 800, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: '', // Text for element
			scrollImg: false, // Set true to use image
			activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		};

		var o = $.extend({}, defaults, options),
			scrollId = '#' + o.scrollName;

		// Create element
		$('<a/>', {
			id: o.scrollName,
			href: '#top',
			title: o.scrollText
		}).appendTo('body');

		// If not using an image display text
		if (!o.scrollImg) {
			$(scrollId).text(o.scrollText);
		}

		// Minium CSS to make the magic happen
		$(scrollId).css({ 'display': 'none', 'position': 'fixed', 'z-index': '99999' });

		// Active point overlay
		if (o.activeOverlay) {
			$("body").append("<div id='" + o.scrollName + "-active'></div>");
			$(scrollId + "-active").css({ 'position': 'absolute', 'top': o.topDistance + 'px', 'width': '100%', 'border-top': '1px dotted ' + o.activeOverlay, 'z-index': '99999' });
		}

		// Scroll function
		$(window).on('scroll', function () {
			switch (o.animation) {
				case "fade":
					$(($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed));
					break;
				case "slide":
					$(($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed));
					break;
				default:
					$(($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0));
			}
		});

	};

	$.scrollUp();


	/*----------------------------------------------------*/
	/*	Tabs
	/*----------------------------------------------------*/

	$('ul.tabs-1 li').on('click', function () {
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs-1 li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	});


	/*----------------------------------------------------*/
	/*	Masonry Grid
	/*----------------------------------------------------*/

	$('.grid-loaded').imagesLoaded(function () {

		// filter items on button click
		$('.masonry-filter').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});

		// change is-checked class on buttons
		$('.masonry-filter button').on('click', function () {
			$('.masonry-filter button').removeClass('is-checked');
			$(this).addClass('is-checked');
			var selector = $(this).attr('data-filter');
			$grid.isotope({
				filter: selector
			});
			return false;
		});

		// init Isotope
		var $grid = $('.masonry-wrap').isotope({
			itemSelector: '.masonry-image',
			percentPosition: true,
			transitionDuration: '0.7s',
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.masonry-image',
			}
		});

	});


	/*----------------------------------------------------*/
	/*	Accordion
	/*----------------------------------------------------*/

	$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

	$(".accordion > .accordion-item").on('click', function () {
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});


	/*----------------------------------------------------*/
	/*	Single Image Lightbox
	/*----------------------------------------------------*/

	$('.image-link').magnificPopup({
		type: 'image'
	});


	/*----------------------------------------------------*/
	/*	Video Link #1 Lightbox
	/*----------------------------------------------------*/

	$('.video-popup1').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com',
					src: 'https://www.youtube.com/embed/SZEflIVnhH8'
				}
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Video Link #2 Lightbox
	/*----------------------------------------------------*/

	$('.video-popup2').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com',
					src: 'https://www.youtube.com/embed/7e90gBu4pas'
				}
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Video Link #3 Lightbox
	/*----------------------------------------------------*/

	$('.video-popup3').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com',
					src: 'https://www.youtube.com/embed/0gv7OC9L2s8'
				}
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Statistic Counter
	/*----------------------------------------------------*/

	$('.count-element').each(function () {
		$(this).appear(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		}, { accX: 0, accY: 0 });
	});


	/*----------------------------------------------------*/
	/*	Testimonials Rotator
	/*----------------------------------------------------*/

	var owl = $('.reviews-1-wrapper');

	owl.owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		navBy: 1,
		autoplayTimeout: 4500,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});


	var owl2 = $('.reviews-2-wrapper');

	owl2.owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		navBy: 1,
		autoplayTimeout: 4500,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});


	$(document).ready(function () {
		var o1 = $('#c1'), o2 = $('#c2');

		//Sync o2 by o1
		o1.on('click', '.owl-next', function () {
			o2.trigger('next.owl.carousel')
		});
		o1.on('click', '.owl-prev', function () {
			o2.trigger('prev.owl.carousel')
		});
		//Sync o1 by o2
		o2.on('click', '.owl-next', function () {
			o1.trigger('next.owl.carousel')
		});
		o2.on('click', '.owl-prev', function () {
			o1.trigger('prev.owl.carousel')
		});

		//Carousel settings
		o1.owlCarousel({
			center: true,
			loop: true,
			items: 1,
			margin: 0,
			animateIn: 'fadeIn', // add this
			animateOut: 'fadeOut', // and this
			nav: true
		});
		o2.owlCarousel({
			center: true,
			loop: true,
			items: 1,
			margin: 0,
			nav: true
		});

	});

	/*----------------------------------------------------*/
	/*	Testimonials Rotator
	/*----------------------------------------------------*/

	var owl = $('.reviews-4-wrapper');
	owl.owlCarousel({
		items: 2,
		loop: true,
		autoplay: true,
		navBy: 1,
		autoplayTimeout: 4500,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 2
			},
			1000: {
				items: 2
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Brands Logo Rotator
	/*----------------------------------------------------*/

	var owl = $('.brands-carousel');
	owl.owlCarousel({
		items: 5,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: false,
		smartSpeed: 2000,
		responsive: {
			0: {
				items: 2
			},
			550: {
				items: 3
			},
			767: {
				items: 3
			},
			768: {
				items: 4
			},
			991: {
				items: 5
			},
			1000: {
				items: 5
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Request Form Validation
	/*----------------------------------------------------*/

	$(".request-form").validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16,
			},
			email: {
				required: true,
				email: true,
			}
		},
		messages: {
			name: {
				required: "لطفاً کمتر از (2) نویسه وارد کنید"
			},
			email: {
				required: "برای تماس با شما به آدرس ایمیل شما نیاز داریم",
				email: "آدرس ایمیل شما باید در قالب name@domain.com باشد"
			},
		}
	});


	/*----------------------------------------------------*/
	/*	Contact Form Validation
	/*----------------------------------------------------*/

	$(".contact-form").validate({
		rules: {
			name: {
				required: true,
				minlength: 1,
				maxlength: 16,
			},
			email: {
				required: true,
				email: true,
			},
			message: {
				required: true,
				minlength: 2,
			}
		},
		messages: {
			name: {
				required: "لطفاً حداقل (1) نویسه وارد کنید"
			},
			email: {
				required: "برای تماس با شما به آدرس ایمیل شما نیاز داریم",
				email: "آدرس ایمیل شما باید در قالب name@domain.com باشد"
			},
			message: {
				required: "لطفاً کمتر از (2) نویسه وارد کنید"
			},
		}
	});


	/*----------------------------------------------------*/
	/*	Comment Form Validation
	/*----------------------------------------------------*/

	$(".comment-form").validate({
		rules: {
			name: {
				required: true,
				minlength: 1,
				maxlength: 16,
			},
			email: {
				required: true,
				email: true,
			},
			message: {
				required: true,
				minlength: 2,
			}
		},
		messages: {
			name: {
				required: "لطفاً حداقل (1) نویسه وارد کنید"
			},
			email: {
				required: "برای تماس با شما به آدرس ایمیل شما نیاز داریم",
				email: "آدرس ایمیل شما باید در قالب name@domain.com باشد"
			},
			message: {
				required: "لطفاً کمتر از (2) نویسه وارد کنید"
			},
		}
	});


	/*----------------------------------------------------*/
	/*	Newsletter Subscribe Form
	/*----------------------------------------------------*/

	$('.newsletter-form').ajaxChimp({
		language: 'cm',
		url: 'https://dsathemes.us3.list-manage.com/subscribe/post?u=af1a6c0b23340d7b339c085b4&id=344a494a6e'
		//http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	});

	$.ajaxChimp.translations.cm = {
		'submit': 'در حال ارسال...',
		0: 'ما یک ایمیل تأیید برای شما ارسال کرده ایم',
		1: 'لطفا آدرس ایمیل خود را وارد کنید',
		2: 'آدرس ایمیل باید حاوی یک واحد باشد @',
		3: 'بخش دامنه آدرس ایمیل نامعتبر است (بخش بعد از @: )',
		4: 'قسمت نام کاربری آدرس ایمیل نامعتبر است (قسمت قبل از @: )',
		5: 'این آدرس ایمیل جعلی یا نامعتبر به نظر می رسد. لطفا یک آدرس ایمیل حقیقی وارد کنید'
	};


});
