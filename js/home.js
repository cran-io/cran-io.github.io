$(document).ready(function(){
  if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
 	$("#title").addClass("superSize");
    }

  if(( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
 	$('.miniOnMobile').addClass("miniSize"); 
 	}
 	


 	// generate_gmap(-34.5854628, -58.4290632,"#googleMap");
 	function generate_gmap(lat,lng,srid) {
		 var map;
		 var coordinates = new google.maps.LatLng(-34.5854628, -58.4290632);
		 var mapOptions = {
		   zoom: 17,
		   center: coordinates,
		   scrollwheel: false
		 }
		 map = new google.maps.Map($("mapContainer"), mapOptions);
		 var marker = new google.maps.Marker({
		     map: map,
		     position: coordinates
		 });
	}

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
// }