$(document).ready(function(){
	var flag = true;
	$(window).scroll(function(){
		if(flag){
			flag = false;
			basicTurn(0);
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
	$('.esButton').click(function(){
      $(this).css("color", "#25252D");
      $('.enButton').css("color", "#B0B3B6");

   	});
	$('.enButton').click(function(){
      $(this).css("color", "#25252D");
      $('.esButton').css("color", "#B0B3B6");
   	});

	

});


var basicTurn = function(x){
	$('.hsImage').rotate({
		angle : x,
		animateTo : x+360,
		easing : function (x,t,b,c,d){ 
          			return c*(t/d)+b;
      			}, 
		duration: 2500,
		callback : function(){
			if(((x/360)%2)&&($(window).scrollTop() >= (($('#whatWeDo').offset().top)-($('#whatWeDo').offset().top/8)))){
				lastTurn(x+360);
				return;
			}
			else{
				basicTurn(x+360);
				return;
			}
		}
    });
}

var lastTurn = function(x){
	$('.hsImage').rotate({
		angle : x,
		animateTo : x+360,
		easing : $.easing.easeOut,
		duration: 2000,
		callback : function(){}
	});
	
}


