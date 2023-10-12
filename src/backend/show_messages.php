<?php
if(isset($_POST['user1']) and isset($_POST['user2'])){
    $messenger = new mysqli("messenger_mysql_1", "root", "root", "messenger");

    $user1 = $_POST['user1'];
    $user2 = $_POST['user2'];

    $user1_id = $messenger->query("SELECT id FROM users WHERE name = '".$user1."';");
    $user2_id = $messenger->query("SELECT id FROM users WHERE name = '".$user2."'");

    $user1_id = $user1_id->fetch_assoc()['id'];
    $user2_id = $user2_id->fetch_assoc()['id'];
    
    $user1_messages = $messenger->query("SELECT message, id FROM messages WHERE receiver_id = '".$user2_id."' AND sender_id = '".$user1_id."';");
    $user2_messages = $messenger->query("SELECT message, id FROM messages WHERE receiver_id = '".$user1_id."' AND sender_id = '".$user2_id."';");
    
    $user1_messages_ids = [];
    $user2_messages_ids = [];

    array_push($user1_messages_ids, []);
    array_push($user2_messages_ids, []);

    array_push($user1_messages_ids, []);
    array_push($user2_messages_ids, []);

    while ($message = $user1_messages->fetch_assoc()){
        array_push($user1_messages_ids[1], $message['message']);
        array_push($user1_messages_ids[0], $message['id']);
    }
    echo "\n";
    while ($message = $user2_messages->fetch_assoc()){
        array_push($user2_messages_ids[1], $message['message']);
        array_push($user2_messages_ids[0], $message['id']);
    }

    $result = [];
    array_push($result, []);
    array_push($result, []);
    array_push($result, []);

    foreach($user1_messages_ids[0] as $message){
        array_push($result[0], (int)$message);
    }
    foreach($user1_messages_ids[1] as $message){
        array_push($result[1], $message);
    }
    foreach($user1_messages_ids[1] as $message){
        array_push($result[2], 'my');
    }
    foreach($user2_messages_ids[0] as $message){
        array_push($result[0], (int)$message);
    }
    foreach($user2_messages_ids[1] as $message){
        array_push($result[1], $message);
    }
    foreach($user2_messages_ids as $message){
        array_push($result[2], 'his');
    }

    // echo json_encode($user1_messages_ids);
    // echo json_encode($user2_messages_ids);
    // array_push($result[0], '\||n}}8890093984930498003092111203948');
    // array_push($result[1], '\||n}}8890093984930498003092111203948');
    // array_push($result[2], '\||n}}8890093984930498003092111203948');
    
    echo json_encode($result);
}
?>
