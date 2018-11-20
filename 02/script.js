$(document).ready(function(){
  $("body article:nth-child(5) ul li:nth-child(4) a").text("Pinterest").attr("href", "http://pinterest.com");
  $('a[href="#"]').click(function(event) {
     event.preventDefault();
  });
  var fontSize = $(".header__main h2").css("font-size");
  var total = parseInt(fontSize) * 2;
  $(".header__main h2").css("font-size", total);
})
