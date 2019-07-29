<?php   
$a = 70;
$b = 60;

if ($a > $b) {
    $txt = sprintf('%u is greater than %u', $a, $b);
}

echo $txt;

mail('stefan.horomnea@gmail.com', 'hi', 'hello');
?>
