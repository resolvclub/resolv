$(document).ready(function(){
	$('#hello > *').fadeIn(1000);
	$('.projectPage > *').fadeIn(1000);
	var menuDown = true;
	var thin = false;
	var amt;
	$('.menuToggle').click(function(){
		amt = ($(document).width() < 769) ? 260 : 50;
		if(menuDown == true){
			$('nav').slideUp(500);
			$('.menuToggle').animate({marginTop: "0px"}, 500);
			menuDown = false;
		}
		else{
			$('nav').slideDown(500);
			$('.menuToggle').animate({marginTop: "+=" + amt.toString() + "px"}, 500);
			menuDown = true;
		}
	});

});