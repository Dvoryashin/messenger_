<?php
if (isset($_POST['set_cookie_name']) and isset($_POST['set_cookie_value'])){
    $cookie_name = $_POST['set_cookie_name'];
    $cookie_value = $_POST['set_cookie_value'];
    setcookie($cookie_name, $cookie_value, time()+24*10*60*60, '/');
}
