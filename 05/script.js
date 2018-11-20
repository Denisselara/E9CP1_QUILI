$(function() {
  $('.social__element').on('click', function(e) {
    console.log(e, this);
  });
  $('button[href="#"]').click(function(event) {
     event.preventDefault();
  });
});
