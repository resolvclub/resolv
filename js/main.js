$(document).ready(function(){
	$('#hello > *').fadeIn(1000);
	$('.projectPage > *').fadeIn(1000);
	var menuDown = false;
	$('.menuToggle').click(function(){
		if(menuDown == true){
			$('nav ul').slideUp(300);
			menuDown = false;
		}
		else{
			$('nav ul').slideDown(300);
			menuDown = true;
		}
	});

});