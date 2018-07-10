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

(function($) {
    $(function() {
        $('select').styler();
    });
})(jQuery);

$(document).ready(function() {
    $("#phone").mask("(999) 999-9999");
    $("#code").mask("+ 9");
    $('input').attr('autocomplete', 'false');

    $('.jq-selectbox__select').on('click', function() {
        $('.jq-selectbox__dropdown ul').jScrollPane();
    });
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

	$('body').css({
		backgroundPosition: 'center ' + movement + 'px'
	});

	$('.ourAdvertisers').css({
		//backgroundPosition: '50% ' + (movement + 400) + 'px'
	});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiBUaGlyZCBwYXJ0eVxyXG4gKi9cclxuLy89IC4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbi5qc1xyXG5cclxuLypcclxuICAgIEN1c3RvbVxyXG4gKi9cclxuLy89IHBhcnRpYWxzL2hlbHBlci5qc1xyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkcHJlbG9hZGVyID0gJCgnLmxvYWRlckFyZWFXcmFwcGVyJyksXHJcbiAgICAgICAgJGxvYWRlciA9ICRwcmVsb2FkZXIuZmluZCgnLmxvYWRlcicpO1xyXG4gICAgICAgIFxyXG4gICAgJGxvYWRlci5mYWRlT3V0KCk7XHJcbiAgICAkcHJlbG9hZGVyLmRlbGF5KDM1MCkuZmFkZU91dCgnc2xvdycpO1xyXG59KTtcclxuJCgnLmNhc2VzTmV3cy1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgIGxvb3A6dHJ1ZSxcclxuICAgIG1hcmdpbjoxMCxcclxuICAgIG5hdjp0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgMDp7XHJcbiAgICAgICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNjAwOntcclxuICAgICAgICAgICAgaXRlbXM6MixcclxuICAgICAgICAgICAgbWFyZ2luOiA0MCAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmF2OnRydWUsXHJcbn0pO1xyXG5cclxuKGZ1bmN0aW9uKCQpIHtcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnc2VsZWN0Jykuc3R5bGVyKCk7XHJcbiAgICB9KTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIiNwaG9uZVwiKS5tYXNrKFwiKDk5OSkgOTk5LTk5OTlcIik7XHJcbiAgICAkKFwiI2NvZGVcIikubWFzayhcIisgOVwiKTtcclxuICAgICQoJ2lucHV0JykuYXR0cignYXV0b2NvbXBsZXRlJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgJCgnLmpxLXNlbGVjdGJveF9fc2VsZWN0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmpxLXNlbGVjdGJveF9fZHJvcGRvd24gdWwnKS5qU2Nyb2xsUGFuZSgpO1xyXG4gICAgfSk7XHJcblx0JCggXCIucGFydG5lcnMtbGlzdC1idG5cIiApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCggXCIucGFydG5lcnMtbGlzdC1idG5cIiApLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoIFwiLnBhcnRuZXJzLW90aGVyXCIgKS50b2dnbGVDbGFzcygnbm9ybWFsJyk7XHJcblx0XHQkKCBcIi5zaG93LWxpc3QsIC5oaWRlLWxpc3RcIiApLnRvZ2dsZSgpO1xyXG5cdH0pO1xyXG5cdCQoIFwiLmxhbmdDaG9pc2UgYVwiICkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCBcIi5sYW5nQ2hvaXNlIGFcIiApLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcbiAgICB2YXIgYWN0UGFnZSA9ICQoJ2NvbnRlbnQnKS5hdHRyKFwiY2xhc3NcIik7XHJcblxyXG5cdCQoJy5uYXZiYXJNZW51IGEnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGFjdE1lbnUgPSAkKHRoaXMpLmRhdGEoJ2hyZWYnKTtcclxuICAgICAgICBpZiggYWN0TWVudSA9PSBhY3RQYWdlKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG5cdHZhciBtb3ZlbWVudCA9IC1wYXJzZUludCgkKHRoaXMpLnNjcm9sbFRvcCgpIC8gMTApO1xyXG5cclxuXHQkKCdib2R5JykuY3NzKHtcclxuXHRcdGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciAnICsgbW92ZW1lbnQgKyAncHgnXHJcblx0fSk7XHJcblxyXG5cdCQoJy5vdXJBZHZlcnRpc2VycycpLmNzcyh7XHJcblx0XHQvL2JhY2tncm91bmRQb3NpdGlvbjogJzUwJSAnICsgKG1vdmVtZW50ICsgNDAwKSArICdweCdcclxuXHR9KTtcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
