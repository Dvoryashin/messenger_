<?php
if(isset($_POST['searched_user'])) {
  $messenger = mysqli_connect("messenger_mysql_1", "root", "root", "messenger");
  $name = $_POST['searched_user'];
  $find_user = mysqli_query($messenger, "SELECT name FROM users WHERE name = '".$name."';");
  if (mysqli_fetch_array($find_user)){
    setcookie('profile_name', $name, time()+24*1*60*60, '/');
    echo 1;
  }
}
?>