import is_user_true from "http://localhost/scripts/is_user_true.js";
import find_user from "http://localhost/scripts/find_user.js"
import {show_chats} from "http://localhost/scripts/show_chats.js"
import get_cookie from "../modules/cookies/get_cookie.js";
// function show_chats(user){
//     $.ajax({
//         method: "POST",
//         url: "http://localhost/backend/show_chats.php",
//         data: { show_chats_to_user: user }
//     })
//     .done(function(msg) {
//         var chats = msg
//         chats = chats.split('|')
//         chats = new Set(chats)
//         chats = Array.from(chats)
//         for (var i=0; i<chats.length; i+=1){
//             const chat = document.createElement('p')
//             console.log(chat)
//             chat.textContent = chats[i]
//             const body = document.querySelector('body')
//             body.appendChild(chat)
//         }
//         return chats 
//     });
// }
window.onload = function() {
    const user = get_cookie('true_user_name');
    is_user_true(user)
    show_chats(user)
    var find_user_btn = document.getElementById('find_user_btn')
    find_user_btn.onclick = find_user
    console.log('имя не должно содержать знак |')

}