$(document).ready(function(){
	$('#send').click(function(){
		$('#contactUsModalTitle').fadeOut(function(){
			$('#finalMessageModalTitle').fadeIn();
		});
		$('.modal-body').slideUp();
		$('.modal-footer').slideUp();
		setTimeout(function(){
		  	$('#myModal').modal('hide');
		  	setTimeout(function(){
			  	$('#finalMessageModalTitle').hide();
			  	$('#contactUsModalTitle').show();
			  	$('.modal-body').show();
				$('.modal-footer').show();
		  	},500);
		  }, 1500);

		$.ajax({
			type: "POST",
			url: 'http://cran.io:8080/mail.json',
			dataType: "json",
			contentType: 'application/json',
			data: (JSON.stringify({
				data:{
					message: $('#modalMessage').val(),
					name: $('#modalName').val(),
					email: $('#modalEmail').val()
				}
			}))
		});
	});
});
