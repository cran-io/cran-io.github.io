$(function(){

	console.log($('.section2').width());
	console.log($('.section2').height());

	setTimeout(function(){
			 $('.index-text').find('p').cranioFade(800); 
	},200);

	section_scroll();
	trigger_icons_popover();	

});


var only_once=false;
function trigger_effect(){
	if(only_once){
		$('.section-info').cranioFade(1100);
		only_once=false;
	}
}

var flag=1;
function section_scroll(){

	$('.arrows1').click(function(){
		$('html,body').animate({scrollTop: $('.section3').offset().top-0.05*$('.section3').offset().top   },1300);
	});
	$('.arrows3').click(function(){
		$('html,body').animate({scrollTop: $('.section5').offset().top+1},1300);
	});

	//icons hover effects
	$('.icon').mouseenter(function(){
			console.log("hovered");
			$(this).animate({'opacity': '0.5'},200);
			$(this).parent().parent().find('.image-footer').animate({'opacity': '0.5'},200);
	});
	$('.icon').mouseleave(function(){
			console.log("hovered");
			$(this).animate({'opacity': '1'},200);
			$(this).parent().parent().find('.image-footer').animate({'opacity': '1'},200);
	});

	$(window).scroll(function(){
		if(flag){
			$(document).scrollTop(0);
			flag=0;
		}

		if($(document).scrollTop() > $('.section1').offset().top/3){
			$('.arrows1').fadeOut(200);
		}
		else{
			$('.arrows1').fadeIn(200);	
		}
		if($(document).scrollTop() > $('.section3').offset().top){
			$('.arrows3').fadeOut(200);
		}
		else{
			$('.arrows3').fadeIn(200);	
		}
		if($(document).scrollTop() > $('.section3').offset().top-$('.section3').offset().top/3 && $(document).scrollTop()<$('.section4').offset().top){
			trigger_effect();
			$('#service1').fadeIn(250,function(){
					$('#service2').fadeIn(250,function(){
						$('#service3').fadeIn(250,function(){
							$('#service4').fadeIn(250,function(){
								$('#service5').fadeIn(250,function(){
									$('#service6').fadeIn(250);
									$('.arrow2').fadeIn();
								});
							});
						});
					});
				});
		}

		if($(document).scrollTop()>($('.section5').offset().top-$('.section5').offset().top/5)){
			$('.mail-h').fadeIn(250,function(){
		   		$('.sn1').animate({opacity:"1"},250, function(){
		   			$('.sn2').animate({opacity:"1"},250, function(){
		   				$('.sn3').animate({opacity:"1"},250);
		   			});
		   		});
			});
		}
	});
}