<?php
$json = file_get_contents('php://input');
if($json) {
    $request = json_decode($json);
    $sendTo = $request->sendTo;
    $message = $request->message;
    mail($sendTo, "IBA Tech Academy", $message);
}
?>