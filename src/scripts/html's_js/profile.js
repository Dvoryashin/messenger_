import get_cookie from "http://localhost/scripts/modules/cookies/get_cookie.js";
import is_user_true from "http://localhost/scripts/is_user_true.js"
function new_chat(general_user, searched_user){
    $.ajax({
      method: "POST",
      url: "http://localhost/backend/new_chat.php",
      data: { general_user: general_user, searched_user: searched_user}
    })
    .done(function(msg) {
      alert(msg)
      window.location = 'http://localhost/messenger.html'
    });
}
window.onload = function() {
    const general_user = get_cookie('true_user_name')
    is_user_true(general_user)
    const profile_name = document.getElementById('profile_name')
    const searched_user = get_cookie('profile_name')
    const new_chat_btn = document.getElementById('new_chat_btn')
    profile_name.textContent = searched_user
    new_chat_btn.onclick = function(){
        new_chat(general_user, searched_user)
    }
}