$(document).ready(function(){
$("body article:nth-child(5) ul li:nth-child(4) a").text("Pinterest").attr("href", "http://pinterest.com");
$('a[href="#"]').click(function(event) {
   event.preventDefault();
});
$(".header__main h2").css("font-size", "3em");
})
