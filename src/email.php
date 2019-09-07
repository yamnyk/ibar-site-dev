<?php
if($_POST){
    $sendTo = $_POST['sendTo'];
    $message = $_POST['message'];
    mail($sendTo, "IBA Tech Academy", $message);
}
?>