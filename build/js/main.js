/*
 Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js

/*
    Custom
 */
//= partials/helper.js

$('.casesNews-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }
    }
});

$(window).scroll(function () {
	var movement = -parseInt($(this).scrollTop() / 10);
	console.log(movement);

	$('body').css({
		backgroundPosition: 'center ' + movement + 'px'
	});

	$('.ourAdvertisers').css({
		backgroundPosition: '50% ' + (movement + 400) + 'px'
	});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiBUaGlyZCBwYXJ0eVxyXG4gKi9cclxuLy89IC4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbi5qc1xyXG5cclxuLypcclxuICAgIEN1c3RvbVxyXG4gKi9cclxuLy89IHBhcnRpYWxzL2hlbHBlci5qc1xyXG5cclxuJCgnLmNhc2VzTmV3cy1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgIGxvb3A6dHJ1ZSxcclxuICAgIG1hcmdpbjoxMCxcclxuICAgIG5hdjp0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgMDp7XHJcbiAgICAgICAgICAgIGl0ZW1zOjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDYwMDp7XHJcbiAgICAgICAgICAgIGl0ZW1zOjJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIG1vdmVtZW50ID0gLXBhcnNlSW50KCQodGhpcykuc2Nyb2xsVG9wKCkgLyAxMCk7XHJcblx0Y29uc29sZS5sb2cobW92ZW1lbnQpO1xyXG5cclxuXHQkKCdib2R5JykuY3NzKHtcclxuXHRcdGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciAnICsgbW92ZW1lbnQgKyAncHgnXHJcblx0fSk7XHJcblxyXG5cdCQoJy5vdXJBZHZlcnRpc2VycycpLmNzcyh7XHJcblx0XHRiYWNrZ3JvdW5kUG9zaXRpb246ICc1MCUgJyArIChtb3ZlbWVudCArIDQwMCkgKyAncHgnXHJcblx0fSk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9