$(document).ready(function(){

	var flag = true;
	$(window).scroll(function(){
		if(flag && $(window).scrollTop()>=$('#whatWeDo').offset().top && $(window).scrollTop()<$('#whatWeDo').offset().top+$('#whatWeDo').height()){
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
});

