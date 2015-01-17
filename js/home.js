$(document).ready(function(){
	var flag = true;
	$(window).scroll(function(){
		if(flag && ($(window).scrollTop() >= ($('#whatWeDo').offset().top-($('#whatWeDo').offset().top/3)) && $(window).scrollTop() <= ($('#whatWeDo').offset().top+($('#whatWeDo').offset().top)/4))){
			flag = false;
			console.log(flag)
			$('.hsImage').rotate({
				easing: function (x,t,b,c,d){ 
          			return c*(t/d)+b;
      			},
				angle : 0,
				animateTo : 90,
				duration: 2000,
				callback : function(){
					$('.hsImage').rotate({
						angle : 90,
						animateTo : 270,
						duration: 600,
						callback: function(){
							console.log(e);
						}
				    });			
					$('.hardwareDefinitionDiv,.softwareDefinitionDiv').fadeOut(800,function(){
						$('#hardwareIcons').fadeIn(400);
						$('#softwareIcons').fadeIn(400);
						$('#hardwareIcons').removeClass( "invisible" );
						$('#softwareIcons').removeClass( "invisible" );
						document.getElementById("whatWeDoTitle").innerHTML = "HOW WE DO IT";
						document.getElementById("whatWeDoSubtitle").innerHTML = "Aca va otra cosa";

					});
				}
		    });
		}
	});
	
	$( ".workDiv" ).mouseenter( function(){
		$(this).find(".logo").hide();
		$(this).find(".informacion").show();
		
	});

	$( ".workDiv" ).mouseleave( function(){
		$(this).find(".informacion").hide();
		$(this).find(".logo").show();
	});
	$( ".divsFotos" ).mouseenter( function(){
		$(this).find(".blackAndWhite").hide();
		$(this).find(".color").show();
		$('#nameTeam').html($(this).data('names'));
		$('#whatHeDoTeam').html($(this).data('whathedo'));
	});

	$( ".divsFotos" ).mouseleave( function(){
		$(this).find(".color").hide();
		$(this).find(".blackAndWhite").show();
		document.getElementById("nameTeam").innerHTML = " ";
		document.getElementById("whatHeDoTeam").innerHTML = " ";

	});


	$('#weAreHiringButton').css({
		'margin-top': -(Math.floor($('#weAreHiringButton').outerHeight(true)*0.5)),
		'margin-left': -(Math.floor($('#weAreHiringButton').outerWidth(true)*0.5))
	});
	$('.haveAnIdeaContent').css({
		'margin-top': -(Math.floor($('.haveAnIdeaContent').outerHeight(true)*0.5))
	});

});
