$(document).ready(function(){

	var flag = true;
	$(window).scroll(function(){
		if(flag && $(window).scrollTop()>=$('#whatWeDo').offset().top && $(window).scrollTop()<$('#whatWeDo').offset().top+$('#whatWeDo').height()){
			flag = false;
			console.log(flag)
			$('.hsImage').rotate({
				angle : 0,
				animateTo : 180,
				easing : $.easing.easeInOutElastic, 
				duration: 3000,
				callback : function(){

					$('.hardwareDefinitionDiv,.softwareDefinitionDiv').fadeOut(1000,function(){
						$('#hardwareDef').addClass( "invisible" );
						$('#softwareDef').addClass( "invisible" );
						$('#hardwareIcons').removeClass( "invisible" );
						$('#softwareIcons').removeClass( "invisible" );
						// $('.hardwareDefinitionDiv,.softwareDefinitionDiv').fadeIn(1000);
					});
				}
		    });
		}
	});
});

