// import get_cookie from "./modules/cooikes/get_cookie.js";
// dcoument.addEventListener("DOMContentLoaded", alert('eheh'))

function find_user() {

    var true_user_name = get_cookie('true_user_name')
    var true_user_password = get_cookie('true_user_password')
    $.ajax({
      method: "POST",
      url: "backend/is_user_true.php",
      data: { is_user_true: true_user_name, is_password_true: true_user_password}
    })
    .done(function( msg ) {
      if (msg == 'yes'){
        window.location = 'http://localhost/profile.html'
      }else{
        console.log('такого пользователя нет')
      }
    });

}