$(document).ready(function() {

	//fade in header stuff upon load
	
	console.log('documentloaded');
	$('.bryan, .swagerty').hide(0).delay(500).fadeIn('slow');
	$('header > p').hide(0).delay(700).fadeIn('slow');

	//mouseover handlers for footer social icons

	$('.twitter').mouseover(function() {
		console.log('mouseover twitter line');
		$('.social-icon').children().hide();
		$('.social1').show();
	});
	$('.github').mouseover(function() {
		console.log('mouseover github line');
		$('.social-icon').children().hide();
		$('.social2').show();
	});
	$('.instagram').mouseover(function() {
		console.log('mouseover instagram line');
		$('.social-icon').children().hide();
		$('.social3').show();
	});
	$('.facebook').mouseover(function() {
		console.log('mouseover facebook line');
		$('.social-icon').children().hide();
		$('.social4').show();
	});

});