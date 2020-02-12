$(document).ready(function(){
  $('.scroll-lets-talk').click( function(){  	    
    $('html, body').animate({ scrollTop: $('.lets-talk').offset().top }, 1000);
    $('#lets_talk_input').focus();
  });
});