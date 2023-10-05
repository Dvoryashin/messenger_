<?php
$messenger = mysqli_connect("messenger_mysql_1", "root", "root", "messenger");

if (isset($_POST['reg_name']) && isset($_POST['reg_psw'])){
    $name = $_POST['reg_name'];
    $password = $_POST['reg_psw'];
    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    $check_name = mysqli_query($messenger, "SELECT name FROM users WHERE name = '".$name."'");
    if (mysqli_fetch_array($check_name)){
        header("Location: http://localhost/same_name.html");
    }else{
        mysqli_query($messenger, "INSERT INTO users (name, password) VALUES ('".$name."', '".$password_hash."');");
        header('Location: http://localhost/messenger.html');
    }
}
if(isset($_POST['signin_name']) && isset($_POST['signin_psw'])){
    $name = $_POST['signin_name'];
    $password = $_POST['signin_psw'];
    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    $check_name = mysqli_query($messenger, "SELECT name FROM users WHERE name = '".$name."'");
    if (mysqli_fetch_array($check_name)){
        $password_from_table = mysqli_query($messenger, "SELECT password FROM users WHERE name = '".$name."'");
        $password_from_table = mysqli_fetch_array($password_from_table)['password'];
        if (password_verify($password, $password_from_table) == 1){
            
            setcookie('true_user_name', $name, time()+24*1*60*60, '/');
            setcookie('true_user_password', $password_from_table, time()+24*1*60*60, '/');
            header('Location: http://localhost/messenger.html');
        }
        else{
            header('Location: http://localhost/no_user.html');
        }
    }
    else{
        header('Location: http://localhost/no_user.html');
    }
    
}










