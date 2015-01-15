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
	
	$( ".workDiv" ).mouseenter( function(){
		$(this).find(".logo").hide();
		$(this).find(".informacion").show();
		
	});

	$( ".workDiv" ).mouseleave( function(){
		$(this).find(".informacion").hide();
		$(this).find(".logo").show();
	});
	// $(window).on('resize', function(){

		$('#weAreHiringButton').css({
		'margin-top': -(Math.floor($('#weAreHiringButton').outerHeight(true)*0.5)),
		'margin-left': -(Math.floor($('#weAreHiringButton').outerWidth(true)*0.5))
		});
		// $('.haveAnIdeaContent').css({
		// 'margin-top': -(Math.floor($('.haveAnIdeaContent').outerHeight(true)*0.5)),
		// 'margin-left': -(Math.floor($('.haveAnIdeaContent').outerWidth(true)*0.5))
		// });

	// });
	

});


$(window).bind('orientationchange resize', function(event){
 if (event.orientation) {
   if (event.orientation == 'landscape') {
     if (window.rotation == 90) {
       rotate(this, -90);
     } else {
       rotate(this, 90);
     }
   }
 }
});

function rotate(el, degs) {
 iedegs = degs/90;
 if (iedegs < 0) iedegs += 4;
 transform = 'rotate('+degs+'deg)';
 iefilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation='+iedegs+')';
 styles = {
   transform: transform,
   '-webkit-transform': transform,
   '-moz-transform': transform,
   '-o-transform': transform,
   filter: iefilter,
   '-ms-filter': iefilter
 };
 $(el).css(styles);
}

