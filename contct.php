<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $name = $_POST['organiazation'];
    $name = $_POST['dropMessage'];
    $message = $_POST['require'];

    $to = "reymould.social@gmail.com";
    $subject = "Enquiry from website";
    $body = "Name: $name\nEmail: $email\nDropMessage: $dropMessage";

    // Send email to both recipients
    mail("naresh.narnapati@reymould.com", $subject, $body);

    if (mail($to, $subject, $body)) {
        header("Location: contact.html?emailSuccess=true");
    } else {
        header("Location: contact.html?emailSuccess=false");
    }
    exit;
}
?>
