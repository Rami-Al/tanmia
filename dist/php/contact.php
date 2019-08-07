<?php
$message = $_POST['message'];
$to = 'rami.alayan@live.com';
$email_body = "Message: $message";
$email_subject = "From Tanmia messages";
$status = mail($to, $email_subject, $email_body);

echo $status;
