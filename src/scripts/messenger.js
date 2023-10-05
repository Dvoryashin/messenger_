import is_user_true from "http://localhost/scripts/is_user_true.js";
import find_user from "http://localhost/scripts/find_user.js"
window.onload = function() {
    is_user_true()
    var find_user_btn = document.getElementById('find_user_btn')
    find_user_btn.onclick = find_user
}