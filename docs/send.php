<?php
	$email     =   $_POST['email'];
  $name      =   $_POST['name'];
  $phone     =   $_POST['phone'];

  if ($email != null) {
  	$email_to_email  = 'msm-mega@yandex.ru, zapros@bioecobalance.com';
	  $headers_email   = "From: order@lidkom.ru";
	  $subject_email   = "Презентация Lidkom";

	  $message_email  = "Email:    $email";
  	mail($email_to_email, $subject_email, $message_email, $headers_email);
  }
  if ($name != null) {
  	$email_to_call  = 'msm-mega@yandex.ru, zapros@bioecobalance.com';
	  $headers_call   = "From: order@lidkom.ru";
	  $subject_call   = "Обратный звонок Lidkom";

	  $message_call  = "Имя:    $name\r\nТелефон:  $phone\r\n";
	  mail($email_to_call, $subject_call, $message_call, $headers_call);
  }

?>