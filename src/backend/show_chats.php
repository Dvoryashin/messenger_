<?php
if (isset($_POST['show_chats_to_user'])){
    $user = $_POST['show_chats_to_user'];
    $messenger = new mysqli("messenger_mysql_1", "root", "root", "messenger");

    $find_id = $messenger->query("SELECT id FROM users WHERE name = '".$user."';");

    $id = $find_id->fetch_assoc();
    $id = $id['id'];

    $chats = $messenger->query("SELECT user_id2 FROM chats WHERE user_id1 = '".$id."'");

    $id = 0;
    $names = [];
    while ($id = $chats->fetch_assoc()){
        $name = $messenger->query("SELECT name FROM users WHERE id = '".$id['user_id2']."';");
        $name = $name->fetch_assoc();
        array_push($names, $name['name']);
    }
    $result = implode('|', $names);
    echo $result;
}
?>