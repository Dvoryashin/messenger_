<?php
if (isset($_POST['general_user']) and isset($_POST['searched_user'])){
    $general_user = $_POST['general_user'];
    $searched_user = $_POST['searched_user'];
    if ($general_user == $searched_user){
        echo 'Нельзя начать переписку с самим собой';
    }
    $messenger = mysqli_connect("messenger_mysql_1", "root", "root", "messenger");
    
    $general_user_id = mysqli_query($messenger, "SELECT id FROM users WHERE name = '".$general_user."'");
    $searched_user_id = mysqli_query($messenger, "SELECT id FROM users WHERE name = '".$searched_user."'");

    $general_user_id = mysqli_fetch_array($general_user_id)['id'];
    $searched_user_id = mysqli_fetch_array($searched_user_id)['id'];

    $check_unique = mysqli_query($messenger, "SELECT id FROM chats WHERE user_id1 = '".$general_user_id."' AND user_id2 = '".$searched_user_id."';");
    
    if(mysqli_fetch_array($check_unique)){
        echo 'У вас уже есть чат с этим человеком';
    }
    else{
        $new_chat = mysqli_query($messenger, "INSERT INTO chats (user_id1, user_id2) VALUES ('".$general_user_id."', '".$searched_user_id."');");
        echo 'Чат успешно создан';
    }
}
?>