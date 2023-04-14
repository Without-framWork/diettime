
var $ = $.noConflict();

$(document).ready(function () {

	//$('.location-picker').locationpicker();

	// $('.location-picker').locationpicker({
	// 	location: {latitude: 46.15242437752303, longitude: 2.7470703125},
	// 	// radius: 300,
	// 	inputBinding: {
	// 		locationNameInput: $('#us2-address')
	// 	},
	// 	enableAutocomplete: true
	// 	});


	//

	$('.digit-group').find('input').each(function() {
		console.log()
		$(this).attr('maxlength', 1);
		$(this).on('keyup', function(e) {
			var parent = $($(this).parent().parent());
			// console.log('parent',parent)
			
			if(e.keyCode === 8 || e.keyCode === 37) {
				var prev = parent.find('input#' + $(this).data('previous'));
				
				if(prev.length) {
					$(prev).select();
				}
			} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
				var next = parent.find('input#' + $(this).data('next'));
				
				if(next.length) {
					$(next).select();
				} else {
					if(parent.data('autosubmit')) {
						parent.submit();
					}
				}
			}
		});
	});

$('.main-slider').owlCarousel({
  
		rtl:true,
    items:1,
    margin:30,
		dots: true
});

$('.product-carousel').owlCarousel({
	rtl:true,
	margin:30,
	nav:true,
	dots: false,
	responsive:{
			0:{
					items:1
			},
			600:{
					items:3
			},
			1000:{
					items:5
			}
	}
})
$('.category-carousel').owlCarousel({
	rtl:true,
	margin:30,
	nav:true,
	dots: false,
	responsive:{
			0:{
					items:1
			},
			600:{
					items:3
			},
			1000:{
					items:5
			}
	}
})


var valueElement = $('#value');
function incrementValue(e){
		console.log(e)
		valueElement.val(Math.max(parseInt(valueElement.val()) + e.data.increment, 0));
		return false;
}

$('#plus').bind('click', {increment: 1}, incrementValue);

$('#minus').bind('click', {increment: -1}, incrementValue);


initMap();
});


/*
$(window).on('load', function() {
	$('#modal-08').modal('show');
});

*/



var map;
var faisalabad = {lat:31.4181, lng:73.0776};

function addYourLocationButton(map, marker) 
{
	var controlDiv = document.createElement('div');
	
	var firstChild = document.createElement('button');
	firstChild.style.backgroundColor = '#fff';
	firstChild.style.border = 'none';
	firstChild.style.outline = 'none';
	firstChild.style.width = '40px';
	firstChild.style.height = '40px';
	firstChild.style.borderRadius = '2px';
	firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
	firstChild.style.cursor = 'pointer';
	firstChild.style.marginRight = '10px';
	firstChild.style.padding = '0px';
	firstChild.title = 'Your Location';
	controlDiv.appendChild(firstChild);
	
	var secondChild = document.createElement('div');
	secondChild.style.margin = '10px';
	secondChild.style.width = '18px';
	secondChild.style.height = '18px';
	secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
	secondChild.style.backgroundSize = '180px 18px';
	secondChild.style.backgroundPosition = '0px 0px';
	secondChild.style.backgroundRepeat = 'no-repeat';
	secondChild.id = 'you_location_img';
	firstChild.appendChild(secondChild);
	
	google.maps.event.addListener(map, 'dragend', function() {
		$('#you_location_img').css('background-position', '0px 0px');
	});

	firstChild.addEventListener('click', function() {
		var imgX = '0';
		var animationInterval = setInterval(function(){
			if(imgX == '-18') imgX = '0';
			else imgX = '-18';
			$('#you_location_img').css('background-position', imgX+'px 0px');
		}, 500);
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				marker.setPosition(latlng);
				map.setCenter(latlng);
				clearInterval(animationInterval);
				$('#you_location_img').css('background-position', '-144px 0px');
			});
		}
		else{
			clearInterval(animationInterval);
			$('#you_location_img').css('background-position', '0px 0px');
		}
	});
	
	controlDiv.index = 1;
	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
}

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: faisalabad
	});
	var myMarker = new google.maps.Marker({
		map: map,
		animation: google.maps.Animation.DROP,
		position: faisalabad
	});
	addYourLocationButton(map, myMarker);
}






$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );