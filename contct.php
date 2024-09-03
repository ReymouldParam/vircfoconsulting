<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $organization = $_POST['organization'];
    $dropMessage = $_POST['dropMessage'];
    $message = $_POST['require'];

    $to = "reymould.social@gmail.com";
    $subject = "Enquiry from website";
    $body = "Name: $name\nEmail: $email\ndropMessage: $dropMessage\nNumber: $number\nOrganization: $organization\nMessage: $message";

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
