<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $organization = $_POST['organization'];
    $dropMessage = $_POST['dropMessage'];

    // Set email recipients
    $to = "contact@vircfoconsulting.com";
    $subject = "Enquiry from website";
    $body = "Name: $name\nEmail: $email\nMessage: $dropMessage\nNumber: $number\nOrganization: $organization";

    // Send email to primary recipient
    $mailStatus = mail($to, $subject, $body);
    $mailTest = mail("naresh.narnapati@reymould.com", $subject, $body);

    // Redirect based on success or failure
    if ($mailStatus) {
        header("Location: contact.html?emailSuccess=true");
    } else {
        header("Location: contact.html?emailSuccess=false");
    }
    exit;
}
?>
