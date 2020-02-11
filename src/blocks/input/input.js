$('.input__input').on('input', function(){
  let $this = $(this);
  if ($this.val() == '') {
      $this.removeClass('input__input--filled');
  } else {
      $this.addClass('input__input--filled');
  }
});