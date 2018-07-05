/*
 Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js

/*
    Custom
 */
//= partials/helper.js
$(window).on('load', function () {
    $preloader = $('.loaderAreaWrapper'),
        $loader = $preloader.find('.loader');
        
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
$('.casesNews-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,
            margin: 0
        },
        600:{
            items:2,
            margin: 40    
        }
    },
    nav:true,
});

$(document).ready(function() {
	$( ".partners-list-btn" ).on('click', function() {
		$( ".partners-list-btn" ).toggleClass('active');
		$( ".partners-other" ).toggleClass('normal');
		$( ".show-list, .hide-list" ).toggle();
	});
	$( ".langChoise a" ).on('click', function() {
		$( ".langChoise a" ).toggleClass('active');
	});

    var actPage = $('content').attr("class");

	$('.navbarMenu a').each(function(){
        var actMenu = $(this).data('href');
        if( actMenu == actPage){
            $(this).closest('li').addClass('active')
        }
    });
});

$(window).scroll(function () {
	var movement = -parseInt($(this).scrollTop() / 10);
	console.log(movement);

	$('body').css({
		backgroundPosition: 'center ' + movement + 'px'
	});

	$('.ourAdvertisers').css({
		//backgroundPosition: '50% ' + (movement + 400) + 'px'
	});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiBUaGlyZCBwYXJ0eVxyXG4gKi9cclxuLy89IC4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbi5qc1xyXG5cclxuLypcclxuICAgIEN1c3RvbVxyXG4gKi9cclxuLy89IHBhcnRpYWxzL2hlbHBlci5qc1xyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkcHJlbG9hZGVyID0gJCgnLmxvYWRlckFyZWFXcmFwcGVyJyksXHJcbiAgICAgICAgJGxvYWRlciA9ICRwcmVsb2FkZXIuZmluZCgnLmxvYWRlcicpO1xyXG4gICAgICAgIFxyXG4gICAgJGxvYWRlci5mYWRlT3V0KCk7XHJcbiAgICAkcHJlbG9hZGVyLmRlbGF5KDM1MCkuZmFkZU91dCgnc2xvdycpO1xyXG59KTtcclxuJCgnLmNhc2VzTmV3cy1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgIGxvb3A6dHJ1ZSxcclxuICAgIG1hcmdpbjoxMCxcclxuICAgIG5hdjp0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgMDp7XHJcbiAgICAgICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNjAwOntcclxuICAgICAgICAgICAgaXRlbXM6MixcclxuICAgICAgICAgICAgbWFyZ2luOiA0MCAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmF2OnRydWUsXHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0JCggXCIucGFydG5lcnMtbGlzdC1idG5cIiApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCggXCIucGFydG5lcnMtbGlzdC1idG5cIiApLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoIFwiLnBhcnRuZXJzLW90aGVyXCIgKS50b2dnbGVDbGFzcygnbm9ybWFsJyk7XHJcblx0XHQkKCBcIi5zaG93LWxpc3QsIC5oaWRlLWxpc3RcIiApLnRvZ2dsZSgpO1xyXG5cdH0pO1xyXG5cdCQoIFwiLmxhbmdDaG9pc2UgYVwiICkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCBcIi5sYW5nQ2hvaXNlIGFcIiApLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcbiAgICB2YXIgYWN0UGFnZSA9ICQoJ2NvbnRlbnQnKS5hdHRyKFwiY2xhc3NcIik7XHJcblxyXG5cdCQoJy5uYXZiYXJNZW51IGEnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGFjdE1lbnUgPSAkKHRoaXMpLmRhdGEoJ2hyZWYnKTtcclxuICAgICAgICBpZiggYWN0TWVudSA9PSBhY3RQYWdlKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG5cdHZhciBtb3ZlbWVudCA9IC1wYXJzZUludCgkKHRoaXMpLnNjcm9sbFRvcCgpIC8gMTApO1xyXG5cdGNvbnNvbGUubG9nKG1vdmVtZW50KTtcclxuXHJcblx0JCgnYm9keScpLmNzcyh7XHJcblx0XHRiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgJyArIG1vdmVtZW50ICsgJ3B4J1xyXG5cdH0pO1xyXG5cclxuXHQkKCcub3VyQWR2ZXJ0aXNlcnMnKS5jc3Moe1xyXG5cdFx0Ly9iYWNrZ3JvdW5kUG9zaXRpb246ICc1MCUgJyArIChtb3ZlbWVudCArIDQwMCkgKyAncHgnXHJcblx0fSk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
