/*
 * Stellarnav.js 2.6.0
 * Responsive, lightweight, multi-level dropdown menu.
 * Copyright (c) 2018 Vinny Moreira - http://vinnymoreira.com
 * Released under the MIT license
 */
(function($) {
	$.fn.stellarNav = function(options, width, breakpoint) {

		var $nav, $width, $breakpoint, $parentItems;
		nav = $(this);
		width = $(window).width();

		// default settings
		var settings = $.extend( {
			theme: 'plain', // adds default color to nav. (light, dark)
			breakpoint: 768, // number in pixels to determine when the nav should turn mobile friendly
			menuLabel: 'Menu', // label for the mobile nav
			sticky: false, // makes nav sticky on scroll (desktop only)
			position: 'static', // 'static', 'top', 'left', 'right' - when set to 'top', this forces the mobile nav to be placed absolutely on the very top of page
			openingSpeed: 250, // how fast the dropdown should open in milliseconds
			closingDelay: 250, // controls how long the dropdowns stay open for in milliseconds
			showArrows: true, // shows dropdown arrows next to the items that have sub menus
			phoneBtn: '', // adds a click-to-call phone link to the top of menu - i.e.: "18009084500"
			phoneLabel: 'Call Us', // label for the phone button
			locationBtn: '', // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
			locationLabel: 'Location', // label for the location button
			closeBtn: false, // adds a close button to the end of nav
			closeLabel: 'Close', // label for the close button
			mobileMode: false,
			scrollbarFix: false // fixes horizontal scrollbar issue on very long navs
		}, options );

		return this.each( function() {

			// defines black or white themes
			if (settings.theme == 'light' || settings.theme == 'dark') {
				nav.addClass(settings.theme);
			}

			if (settings.breakpoint) {
				breakpoint = settings.breakpoint;
			}

			if (settings.menuLabel) {
				menuLabel = settings.menuLabel;
			} else {
				menuLabel = '';
			}

			if (settings.phoneLabel) {
				phoneLabel = settings.phoneLabel;
			} else {
				phoneLabel = '';
			}

			if (settings.locationLabel) {
				locationLabel = settings.locationLabel;
			} else {
				locationLabel = '';
			}

			if (settings.closeLabel) {
				closeLabel = settings.closeLabel;
			} else {
				closeLabel = '';
			}

			// css classes for main menu mobile buttons
			if( settings.phoneBtn && settings.locationBtn ) {
				var cssClass = 'third';
			} else if( settings.phoneBtn || settings.locationBtn ) {
				var cssClass = 'half';
			} else {
				var cssClass = 'full';
			}

			// adds the toggle button to open and close nav
			if ( settings.position == 'right' || settings.position == 'left' ) {
				nav.prepend('<a href="#" class="menu-toggle"><span class="bars"><span></span><span></span><span></span></span> ' + menuLabel + '</a>');
			} else {
				nav.prepend('<a href="#" class="menu-toggle ' + cssClass + '"><span class="bars"><span></span><span></span><span></span></span> ' + menuLabel + '</a>');
			}

			// adds a click-to-call link
			if (settings.phoneBtn && !(settings.position == 'right' || settings.position == 'left')) {
				var btn = '<a href="tel:'+ settings.phoneBtn +'" class="call-btn-mobile ' + cssClass + '"><svg id="icon-phone"></svg> <span>' + phoneLabel + '</span></a>';
				nav.find('a.menu-toggle').after(btn);
			}

			// adds a location page link to the beginning of nav
			if (settings.locationBtn && !(settings.position == 'right' || settings.position == 'left')) {
				var btn = '<a href="'+ settings.locationBtn +'" class="location-btn-mobile ' + cssClass + '" target="_blank"><svg id="icon-location"></svg> <span>' + locationLabel + '</span></a>';
				nav.find('a.menu-toggle').after(btn);
			}

			// Makes nav sticky on scroll
			if (settings.sticky) {
				navPos = nav.offset().top;
				if(width >= breakpoint) {
					$(window).on('scroll', function() {
		         if ($(window).scrollTop() > navPos) {
		             nav.addClass('fixed');
		         }
		         else {
		             nav.removeClass('fixed');
		         }
			    });
				}
			}

			if (settings.position == 'top') {
				nav.addClass('top');
			}

			if (settings.position == 'left' || settings.position == 'right') {
				var closeBtn = '<a href="#" class="close-menu ' + cssClass + '"><span class="icon-close"></span>' + closeLabel + '</a>';
				var phoneBtn = '<a href="tel:'+ settings.phoneBtn +'" class="call-btn-mobile ' + cssClass + '"><svg id="icon-phone"></svg></a>';
				var locationBtn = '<a href="'+ settings.locationBtn +'" class="location-btn-mobile ' + cssClass + '" target="_blank"><svg id="icon-location"></svg></i></a>';

				nav.find('ul:first').prepend(closeBtn);

				if (settings.locationBtn) {
					nav.find('ul:first').prepend(locationBtn);
				}
				if (settings.phoneBtn) {
					nav.find('ul:first').prepend(phoneBtn);
				}
			}

			if (settings.position == 'right') {
				nav.addClass('right');
			}

			if (settings.position == 'left') {
				nav.addClass('left');
			}

			if (!settings.showArrows) {
				nav.addClass('hide-arrows');
			}

			if (settings.closeBtn && !(settings.position == 'right' || settings.position == 'left')) {
				// adds a link to end of nav to close it
				nav.find('ul:first').append('<li><a href="#" class="close-menu"><span class="icon-close"></span> ' + closeLabel + '</a></li>');
			}

			if (settings.scrollbarFix) {
				$('body').addClass('stellarnav-noscroll-x');
			}

			// svg graphics
			// phone icon
			var phoneIcon = document.getElementById('icon-phone'); // Gets phone icon element
			if( phoneIcon ) {
				phoneIcon.setAttribute('viewBox','0 0 480 480');
				var newPhoneIcon = document.createElementNS("http://www.w3.org/2000/svg", 'path'); // Create a path in SVG's namespace
				newPhoneIcon.setAttribute('d','M340.273,275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518,0.744l-27.082,27.076 c-1.711-0.943-3.482-1.928-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113c-24.704-24.701-37.704-48.144-47.209-65.257     c-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149l8.936-8.947c11.097-11.1,11.403-28.826,0.721-39.521L73.39,8.194 C62.708-2.486,44.969-2.162,33.872,8.938l-15.15,15.237l0.414,0.411c-5.08,6.482-9.325,13.958-12.484,22.02     C3.74,54.28,1.927,61.603,1.098,68.941C-6,127.785,20.89,181.564,93.866,254.541c100.875,100.868,182.167,93.248,185.674,92.876 c7.638-0.913,14.958-2.738,22.397-5.627c7.992-3.122,15.463-7.361,21.941-12.43l0.331,0.294l15.348-15.029     C350.631,303.527,350.95,285.795,340.273,275.083z'); // Sets path's data
				phoneIcon.appendChild(newPhoneIcon);
			}

			// location icon
			var locationIcon = document.getElementById('icon-location'); //Gets phone icon element
			if( locationIcon ) {
				locationIcon.setAttribute('viewBox','0 0 480 480');
				var newLocationIcon = document.createElementNS("http://www.w3.org/2000/svg", 'path'); // Create a path in SVG's namespace
				newLocationIcon.setAttribute('d','M322.621,42.825C294.073,14.272,259.619,0,219.268,0c-40.353,0-74.803,14.275-103.353,42.825 c-28.549,28.549-42.825,63-42.825,103.353c0,20.749,3.14,37.782,9.419,51.106l104.21,220.986   c2.856,6.276,7.283,11.225,13.278,14.838c5.996,3.617,12.419,5.428,19.273,5.428c6.852,0,13.278-1.811,19.273-5.428 c5.996-3.613,10.513-8.562,13.559-14.838l103.918-220.986c6.282-13.324,9.424-30.358,9.424-51.106 C365.449,105.825,351.176,71.378,322.621,42.825z M270.942,197.855c-14.273,14.272-31.497,21.411-51.674,21.411 s-37.401-7.139-51.678-21.411c-14.275-14.277-21.414-31.501-21.414-51.678c0-20.175,7.139-37.402,21.414-51.675 c14.277-14.275,31.504-21.414,51.678-21.414c20.177,0,37.401,7.139,51.674,21.414c14.274,14.272,21.413,31.5,21.413,51.675 C292.355,166.352,285.217,183.575,270.942,197.855z'); // Sets path's data
				locationIcon.appendChild(newLocationIcon);
			}

			// opens and closes menu
			$('.menu-toggle, .stellarnav-open').on('click', function(e) {
				e.preventDefault();

				// if nav position is left or right, uses fadeToggle instead of slideToggle
				if (settings.position == 'left' || settings.position == 'right') {
					nav.find('ul:first').stop(true, true).fadeToggle(settings.openingSpeed);
					nav.toggleClass('active');

					if(nav.hasClass('active') && nav.hasClass('mobile')) {
						// closes the menu when clicked outside of it
						$(document).on('click', function(event) {
							// ensures menu hides only on mobile nav
							if(nav.hasClass('mobile')) {
							  	if (!$(event.target).closest(nav).length) {
							  		nav.find('ul:first').stop(true, true).fadeOut(settings.openingSpeed);
							  		nav.removeClass('active');
								}
							}
						});
					}

				} else {
					// static position - normal open and close animation
					nav.find('ul:first').stop(true, true).slideToggle(settings.openingSpeed);
					nav.toggleClass('active');
				}
			});

			// activates the close button
			$('.close-menu, .stellarnav-close').on('click', function() {

				nav.removeClass('active');

				if (settings.position == 'left' || settings.position == 'right') {
					nav.find('ul:first').stop(true, true).fadeToggle(settings.openingSpeed);
				} else {
					nav.find('ul:first').stop(true, true).slideUp(settings.openingSpeed).toggleClass('active');
				}
			});


			// adds toggle button to li items that have children
			nav.find('li a').each(function() {
				if ($(this).next().length > 0) {
					$(this).parent('li').addClass('has-sub').append('<a class="dd-toggle" href="#"><span class="icon-plus"></span></a>');
				}
			});

			// expands the dropdown menu on each click
			nav.find('li .dd-toggle').on('click', function(e) {
				e.preventDefault();
				$(this).parent('li').children('ul').stop(true, true).slideToggle(settings.openingSpeed);
				$(this).parent('li').toggleClass('open');
			});

			var resetTriggers = function() {
				nav.find('li').off('mouseenter');
				nav.find('li').off('mouseleave');
			}

			// defines top level items
			parentItems = nav.find('> ul > li');

			var setTriggers = function() {
				$(parentItems).each(function() {
					if( $(this).hasClass('mega') ) {
						// mega dropdown
						$(this).on('mouseenter', function(){
							$(this).find('ul').first().stop(true, true).slideDown(settings.openingSpeed);
						});
						$(this).on('mouseleave', function(){
							$(this).find('ul').first().stop(true, true).slideUp(settings.openingSpeed);
						});
					} else {
						// normal dropdown
						// first-level
						$(this).on('mouseenter', function(){
							$(this).children('ul').stop(true, true).slideDown(settings.openingSpeed);
						});
						$(this).on('mouseleave', function(){
							$(this).children('ul').stop(true, true).delay(settings.closingDelay).slideUp(settings.openingSpeed);
						});

						// second level and below
						$(this).find('li.has-sub').on('mouseenter', function(){
							$(this).children('ul').stop(true, true).slideDown(settings.openingSpeed);
						});
						$(this).find('li.has-sub').on('mouseleave', function(){
							$(this).children('ul').stop(true, true).delay(settings.closingDelay).slideUp(settings.openingSpeed);
						});
					}
				});
			}

			windowCheck();

			// check browser width in real-time
			function windowCheck() {
				var browserWidth = window.innerWidth;

				if(browserWidth <= breakpoint || settings.mobileMode) {
					// mobile/tablet nav

					resetTriggers();
					nav.addClass('mobile');
					nav.removeClass('desktop');

					// closes the menu when resizing window back to desktop
					if( !nav.hasClass('active') && nav.find('ul:first').is(':visible') ) {
						nav.find('ul:first').hide();
					}

					// resets all the styles back to normal that are added on the desktop for the mega dropdown
					nav.find('li.mega').each(function() {
						$(this).find('ul').first().removeAttr('style');
						$(this).find('ul').first().children().removeAttr('style');
					});

				} else {
					// desktop nav
					nav.addClass('desktop');
					nav.removeClass('mobile');

					if(nav.hasClass('active')) {
						nav.removeClass('active');
					}

					// ensures stellarnav is visible after resizing window
					if( !nav.hasClass('active') && nav.find('ul:first').is(':hidden') ) {
						nav.find('ul:first').show();
					}

					// hides items that were open on mobile
					$('li.open').removeClass('open').find('ul:visible').hide();

					resetTriggers();
					setTriggers();

					// mega dropdown
					navWidth = 0;

					$(parentItems).each(function() {
			    	// calculates the nav width based on the sum of all top-level items
			    	navWidth += $(this)[0].getBoundingClientRect().width;
						navWidth = Math.round(navWidth);

						if($(this).hasClass('mega')) {
							// left aligns mega dropdown with nav
							$(this).find('ul').first().css({'left': 0, 'right': 0, 'margin': '0px auto'});

							// gets the data-column attribute and divides the columns equally
							numCols = $(this).attr('data-columns');
							if(numCols==2) {
								$(this).find('li.has-sub').width('50%');
							} else if (numCols==3) {
								$(this).find('ul').first().children().width('33.33%');
							} else if (numCols==4) {
								$(this).find('ul').first().children().width('25%');
							} else if (numCols==5) {
								$(this).find('ul').first().children().width('20%');
							} else if (numCols==6) {
								$(this).find('ul').first().children().width('16.66%');
							} else if (numCols==7) {
								$(this).find('ul').first().children().width('14.28%');
							} else if (numCols==8) {
								$(this).find('ul').first().children().width('12.5%');
							} else {
								// defaults to 4 column
								$(this).find('ul').first().children().width('25%');
							}
						}

					});

					// defines the mega dropdown width to be the same as nav width
					if(parentItems.hasClass('mega')) {
						nav.find('li.mega > ul').css({'max-width':navWidth});
					}
					// end mega dropdown

				} // end desktop nav
			} // windowCheck()

			$(window).on('resize', function() {
				windowCheck();
			});
		});
	}
}(jQuery));