<?php
if (isset($_POST['message']) and isset($_POST['sender_name']) and isset($_POST['receiver_name'])){
    $messenger = new mysqli("messenger_mysql_1", "root", "root", "messenger");

    $message = $_POST['message'];
    $sender_name = $_POST['sender_name'];
    $receiver_name = $_POST['receiver_name'];

    $date = date('y-m-d h:m:s');

    $sender_id = $messenger->query("SELECT id FROM users WHERE name = '".$sender_name."';");
    $sender_id = $sender_id->fetch_assoc()['id'];

    $receiver_id = $messenger->query("SELECT id FROM users WHERE name = '".$receiver_name."';");
    $receiver_id = $receiver_id->fetch_assoc()['id'];

    $messenger->query("INSERT INTO messages (sender_id, receiver_id, message, created_at, is_readed) VALUES ('".$sender_id."', '".$receiver_id."', '".$message."', '".$date."', 1);");
}