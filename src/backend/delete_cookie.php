<?php
if (isset($_POST['delete_cookie_name'])){
    $cookie_name = $_POST['delete_cookie_name'];
    if (isset($_COOKIE[$cookie_name])){
        $_COOKIE['cookie_name'] = 0;
    }
}