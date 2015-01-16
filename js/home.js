$(document).ready(function(){
	var flag = true;
	$(window).scroll(function(){
		if(flag && ($(window).scrollTop() >= ($('#whatWeDo').offset().top-($('#whatWeDo').offset().top/8)) && $(window).scrollTop() <= ($('#whatWeDo').offset().top+($('#whatWeDo').offset().top)/4))){
			flag = false;
			console.log(flag)
			$('.hsImage').rotate({
				angle : 0,
				animateTo : 180,
				easing : $.easing.easeInOut, 
				duration: 1500,
				callback : function(){

					$('.hardwareDefinitionDiv,.softwareDefinitionDiv').fadeOut(800,function(){
						$('#hardwareIcons').fadeIn(1500);
						$('#softwareIcons').fadeIn(1500);
						$('#hardwareIcons').removeClass( "invisible" );
						$('#softwareIcons').removeClass( "invisible" );



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

	$('#weAreHiringButton').css({
		'margin-top': -(Math.floor($('#weAreHiringButton').outerHeight(true)*0.5)),
		'margin-left': -(Math.floor($('#weAreHiringButton').outerWidth(true)*0.5))
	});
	$('.haveAnIdeaContent').css({
		'margin-top': -(Math.floor($('.haveAnIdeaContent').outerHeight(true)*0.5))
	});

});
