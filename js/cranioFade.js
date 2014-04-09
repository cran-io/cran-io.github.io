$.fn.cranioFade = function(time,callback) {
    this.css( {"opacity" : "0"} ).show();
    text_arr=this.html();
    splitted_string=this.html().split(" ");
    var spanned_string='';
    for(var i = 0 ; i < splitted_string.length ; i++){
    	if(i%2==0)
    		spanned_string +=  "<span class='even'>"+splitted_string[i]+" </span>";
    	else
    		spanned_string +=  "<span class='odd'>"+splitted_string[i]+" </span>";
    }
    this.html(spanned_string);
	$('.odd,.even').css({"opacity" : "0"});
    this.animate({"opacity" : "1"},0,function(){
    	$('.even').animate({"opacity" : "1"},time/3);
        $('.odd').animate({"opacity" : "1"},time,function(){
            if(typeof callback == 'function'){
                callback();
            }
        }); 	
    });
};