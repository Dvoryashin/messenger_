import get_cookie from "./modules/cookies/get_cookie.js";

export default function is_user_true(name){
  var true_user_name = name
  var true_user_password = get_cookie('true_user_password')
  $.ajax({
    method: "POST",
    url: "http://localhost/backend/is_user_true.php",
    data: { is_user_true: true_user_name, is_password_true: true_user_password}
  })
  .done(function(msg) {
    if (msg != 1){
      window.location = 'http://localhost/signin.html'
    }
    else{
      console.log('можете проходить')
    }
  });
}
