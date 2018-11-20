var $hijo4 = $("nav ul li:nth-child(4)");
var $hijo7 = $("nav ul li:nth-child(7)")

$hijo4.append('<ul><li><a href="#">link 4.a</a></li></ul>');
$hijo4.before('<ul><li><a href="#">link 4.a</a></li></ul>');
$hijo7.prepend('😎');
$hijo7.after('🙂');
