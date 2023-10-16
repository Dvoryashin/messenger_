<?php
if (isset($_POST['message_id_for_delete'])){
    $messenger = new mysqli("messenger_mysql_1", "root", "root", "messenger");
    $messenger->query("DELETE FROM messages WHERE id = '".$_POST['message_id_for_delete']."';");
}
?>