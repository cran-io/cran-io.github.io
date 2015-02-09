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
			url: "http://cranio-mail-sender.herokuapp.com/email_sender.json",
			dataType: "json",
			data: ({
				data:{
					message: $('#modalMessage').val(),
					name: $('#modalEmail').val()
				}
			})
		});
	});
});