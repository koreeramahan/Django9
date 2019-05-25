$(document).ready(function(){
	$('.one-post').hover(function(event){
		$(event.currentTarget).find('.one-post-shadow').animate({opacity:
		'0.3'}, 300);
	}, function(event){
		$(event.currentTarget).find('.one-post-shadow').animate({opacity: '0'},
		300);
		})
});
