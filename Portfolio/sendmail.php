<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "phpmailer/src/Exception.php";
    require "phpmailer/src/PHPMailer.php";

    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";
    $mail->setLanguage("en", "phpmailer/language/");
    $mail->IsHTML(true);

    $mail->setForm("pastushkova.veronika@yandex.ru", "My Portfolio Message");
    $mail->addAddress("pastushkova.veronika@yandex.ru");
    $mail->Subject = "Message from Portfolio";

    $body = "<h1>Personal Data</h1>"

    if(trim(!empty($_POST["name"]))){
        $body.="<p><strong>Name:</strong> ".$_POST["name"].</p>;
    }
    if(trim(!empty($_POST["email"]))){
        $body.="<p><strong>Email:</strong> ".$_POST["name"].</p>;
    }
    if(trim(!empty($_POST["subject"]))){
        $body.="<p><strong>Name:</strong> ".$_POST["name"].</p>;
    }
    if(trim(!empty($_POST["message"]))){
        $body.="<p><strong>Email:</strong> ".$_POST["name"].</p>;
    }

    $mail->Body = $body;

    if(!$mail->send()){
        $message = "Error";
    } else {
        $message = "Message has been sent!"
    }
    
    $response = ["message"-> $message];

    header("Content-type: application/json");
    echo json_encode($response);
?>
