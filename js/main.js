'use strict';

(function($){
	$(document).ready(function() {

		// Link anchor
		$('.header__link').click(function(){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 0
			}, 600);
			return false;
		});

		//Tabi
		$('.tabs').tabs();

		//Masonry
		$('.tabs__content').masonry({
			columnWidth: '.tabs__link',
			itemSelector: '.tabs__link',
			horizontalOrder: true,
			gutter: 10
		});

		//Slider-1
		$('.slider__items').slick({
			arrows: false,
			infinite: true,
			dots: true,
			appendDots: $('.slider__pages'),
		});
		
	});

	//GoogleMap
	$(window).load(function(){
		var $mapContainer = $('.google-map')[0];
		var infoWindowContent = $('.google-map__info').html();
		var mapCenter = {lat: 49.568450, lng: 34.585569};
		var map = new google.maps.Map($mapContainer, {
			center: mapCenter,
			zoom: 15,
			disableDefaultUI: true,
				//zoomControl: true,
				//mapTypeId: google.maps.MapTypeId.SATELLITE
			});

		//Marker 
		var marker = new google.maps.Marker({
			position: mapCenter,
			map: map,
			title: 'BeetRoot',
			icon: 'images/marker.png'
		});	

		//InfoWindow 
		var infowindow = new google.maps.InfoWindow({
			content: infoWindowContent
		});

		//Show InfoWindow
		infowindow.open(map, marker);
		marker.addListener('click', function(){
			infowindow.open(map, marker);
		});

		//Center Map when resize 
		google.maps.event.addDomListener(window, 'resize', function(){
			var center = map.getCenter();
			google.maps.event.trigger(map, 'resize');
			map.setCenter(center);
		});

	});

})(jQuery);
