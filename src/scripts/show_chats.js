import { show_messages } from "./show_messages.js";
export function show_chats(user){
    $.ajax({
        method: "POST",
        url: "http://localhost/backend/show_chats.php",
        data: { show_chats_to_user: user }
    })
    .done(function(msg) {
        var chats = msg
        chats = chats.split('|')
        chats = new Set(chats)
        chats = Array.from(chats)
        for (var i=0; i<chats.length; i+=1){
            const chat = document.createElement('p')
            chat.textContent = chats[i]
            chat.onclick = function(){
                show_messages(user, chat.textContent)
            }
            chat.onmouseover = function(){
                chat.style.cursor = "pointer";
            }
            const body = document.querySelector('body')
            body.appendChild(chat)
        }
    });
}