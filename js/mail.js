$(document).ready(function(){
	$('#send').click(function(){
		$.ajax({
		type: "POST",
		url: "http://cranio-mail-sender.herokuapp.com/email_sender.json",
		dataType: "json",
		data: ({
			message: "adasas",
			name: "jjajaj"
		}),
		success: function(data){
			alert("ok");
		},
		error: function(xhr){
			alert("error");
		}
		});
	});
});