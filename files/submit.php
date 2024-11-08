<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function sendEmail($submission) {
  //PHPMailer Object
  $mail = new PHPMailer(true); //Argument true in constructor enables exceptions

  //From email address and name
  $mail->From = $submission["email"];
  $mail->FromName = $submission["name"];

  //To address and name
  $mail->addAddress("artpac2050@gmail.com", "Your Name");

  //Address to which recipient will reply
  $mail->addReplyTo($submission["email"], $submission["name"]);

  //CC and BCC
  // $mail->addCC("cc@example.com");
  // $mail->addBCC("bcc@example.com");

  //Send HTML or Plain Text email
  $mail->isHTML(true);

  $mail->Subject = "New contact form submission from example.com";
  $mailContent = "<p>From: </p>".$submission["email"].
  "<p>Name: </p>".$submission["name"].
  "<p>Message: </p>".$submission["message"];

  // echo $mailContent;

  $mail->Body = $mailContent;

  try {
      $mail->send();
      echo "Message has been sent successfully";
  } catch (Exception $e) {
      echo "Mailer Error: " . $mail->ErrorInfo;
  }
}
?>
