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

	window.addEventListener("scroll",function() { 
   if(window.scrollY > $("section#home").height()) {
      $('nav').animate({backgroundColor: "#ecf0f1"}, {duration: 100});
   }
   else {
      $('nav').animate({backgroundColor: "transparent"}, {duration: 100});
   }
   var yPos = $(window).scrollY / 2;
   $("#home").css("backgroundPosition", yPos);
	},false);

	$(window).resize(function(){
		if($(window).width() > 768){
			$('nav ul').slideDown(300);
			menuDown = true;
		}
	});

	$(".projectToggle").click(function(){
		if($(this).siblings(".projectContent").css("display") == "none")
			$(this).siblings(".projectContent").slideDown();
		else $(this).siblings(".projectContent").slideUp();
	});

});