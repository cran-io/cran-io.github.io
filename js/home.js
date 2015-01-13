$(document).ready(function(){
 	// 	// generate_gmap(-34.5854628, -58.4290632,"#googleMap");
 	// 	function generate_gmap(lat,lng,srid) {
	// 	 var map;
	// 	 var coordinates = new google.maps.LatLng(-34.5854628, -58.4290632);
	// 	 var mapOptions = {
	// 	   zoom: 17,
	// 	   center: coordinates,
	// 	   scrollwheel: false
	// 	 }
	// 	 map = new google.maps.Map($("mapContainer"), mapOptions);
	// 	 var marker = new google.maps.Marker({
	// 	     map: map,
	// 	     position: coordinates
	// 	 });
	// }
	var flag = true;
	$(window).scroll(function(){
		if(flag && $(window).scrollTop()>=$('#whatWeDo').offset().top && $(window).scrollTop()<$('#whatWeDo').offset().top+$('#whatWeDo').height()){
			flag = false;
			console.log(flag)
			$('.laImagen').rotate({
				angle : 0,
				animateTo : 180,
				easing : $.easing.easeInOutElastic, 
				duration: 3000,
				callback : function(){
					$('.hardware,.software').fadeOut(1000,function(){
						$('.hardware,.software').fadeIn(1000);
					});
				}
		    });
		}
	});
});

// function generate_gmap(lat,lng,srid) {
//  var map;
//  var coordinates = new google.maps.LatLng(lat,lng);
//  var mapOptions = {
//    zoom: 17,
//    center: coordinates,
//    scrollwheel: false
//  }
//  map = new google.maps.Map(document.getElementById(srid), mapOptions);
//  var marker = new google.maps.Marker({
//      map: map,
//      position: coordinates
//  });





//  $(document).ready(function() {
// 14
//   $('#incfont').click(function(){   
// 15
//         curSize= parseInt($('#content').css('font-size')) + 2;
// 16

// 17
//         $('#content').css('font-size', curSize);
// 18
//         }); 
// 19
//   $('#decfont').click(function(){   
// 20
//         curSize= parseInt($('#content').css('font-size')) - 2;
// 21
//   if(curSize>=12)
// 22
//         $('#content').css('font-size', curSize);
// 23
//         });
