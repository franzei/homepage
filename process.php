<?php
  if (isset($_POST['submit']))  {

    //Email information
    $admin_email = "franz.r.maier@gmx.at";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    //send email
    mail($admin_email, "New Form Submission", $message . ' - ' . $phone, "From:" . $email);

    header('Location: https://kotlechner.netlify.app');
  }
