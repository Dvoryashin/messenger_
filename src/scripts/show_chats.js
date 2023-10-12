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
        const chats_div = document.querySelector('.chats')
        for (var i=0; i<chats.length; i+=1){
            const chat = document.createElement('p')
            chat.className = 'chat'
            chat.textContent = chats[i]
            chat.onclick = function(){
                var chat_clone = document.querySelectorAll('.chat')
                chat_clone.forEach(chat => {
                    chat.style.color = 'black'
                })
                chat.style.color = 'green'
                show_messages(user, chat.textContent)
                var messages_area = document.querySelector('.messages_area')
                messages_area.remove()
            }
            chat.onmouseover = function(){
                chat.style.cursor = "pointer";
            }
            chats_div.appendChild(chat)
        }
    });
}