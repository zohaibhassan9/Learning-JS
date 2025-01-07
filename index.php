<?php
if (isset($_POST["submit"])) {
    // Sanitize input
    $f_name = htmlspecialchars($_POST['f_name'], ENT_QUOTES, 'UTF-8');
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject'], ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

    // Email details
    $to = "naved@webzesty.net";
    $body = "From: $f_name<br><br>E-Mail: $email<br><br>Message:<br>$message";
    $header = "From: $email \r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";

    // Send email
    if (mail($to, $subject, $body, $header)) {
        $result = "Thank You! Your request has been submitted successfully.";
    } else {
        $result = "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>

<!-- Display result -->
<?php if (isset($result)) { ?>
    <div class="alert alert-info"><?php echo $result; ?></div>
<?php } ?>
