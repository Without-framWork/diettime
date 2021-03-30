
var $ = $.noConflict();

$(document).ready(function () {


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

});


/*
$(window).on('load', function() {
	$('#modal-08').modal('show');
});

*/