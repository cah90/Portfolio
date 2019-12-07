<?php   
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mailBody = $name . " contacted you \n\n";
$mailBody .= 'Email is ' . $email . "\n\n";
$mailBody .= 'Message is: \n\n';
$mailBody .= $message;

$mailBody="Name: $name\nEmail: $email\nMessage: $message\n";

$from = "contact@cassiabernardo.com";
$to = "contact@cassiabernardo.com";
$subject = "Form to email message";
$message = "PHP mail works just fine";
$headers = "From:" . $from;
mail($to,$subject,$mailBody, $headers);

echo ("Your message was successfully sent!");

?>
