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