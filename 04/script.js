$(function() {
  $('.add_name').on('click', function(e){
    var name = prompt('Ingrese un nombre');
    $('.names').append('<li><span>' + name + '</span>  <button class="remove_name">X</button></li>');
  });

  $('.names').on('click', 'li', function(e) {
    e.currentTarget.remove();
  });
});
