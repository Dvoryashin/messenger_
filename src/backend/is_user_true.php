<?php
if(isset($_POST['is_user_true']) and isset($_POST['is_password_true'])) {
  $messenger = mysqli_connect("messenger_mysql_1", "root", "root", "messenger");

  $name = $_POST['is_user_true'];
  $password = $_POST['is_password_true'];

  $password_hash = password_hash($password, PASSWORD_DEFAULT);

  $check_name = mysqli_query($messenger, "SELECT name FROM users WHERE name = '".$name."'");
  if (mysqli_fetch_array($check_name)){
    $password_from_table = mysqli_query($messenger, "SELECT password FROM users WHERE name = '".$name."'");
    $password_from_table = mysqli_fetch_array($password_from_table)['password'];
    $password_from_table = join('', explode(' ', $password_from_table));
    if ($password === $password_from_table){
      echo 1;
    }
  }
}
?>