$(document).ready(function(){
	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
	var mail = $('#lets_talk_input');

  $('#lets_talk_btn').prop('disabled', true);

  $(mail).keyup(function() {
		if($(this).val() != '') {
			if(mail.val().search(pattern) == 0){
				$('#lets_talk_btn').prop('disabled', false);
			}			
		}
	});

	setTimeout(function() { 
		$('#lets-talk__in').val("uytdr75647");
	}, 5000);
});