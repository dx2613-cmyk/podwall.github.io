<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["phone"]));
    $service = strip_tags(trim($_POST["service"]));
    $message = strip_tags(trim($_POST["message"]));
    
    $email_to = "altcom.servis@mail.ru";
    $email_subject = "Новая заявка с сайта PODWALL";
    
    $email_message = "Новая заявка:\n\n";
    $email_message .= "Имя: " . $name . "\n";
    $email_message .= "Телефон: " . $phone . "\n";
    $email_message .= "Услуга: " . $service . "\n";
    $email_message .= "Сообщение: " . $message . "\n";
    
    $headers = "From: no-reply@podwall.ru\r\n";
    $headers .= "Reply-To: " . $phone . "\r\n";
    
    if (mail($email_to, $email_subject, $email_message, $headers)) {
        echo "Сообщение отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>
