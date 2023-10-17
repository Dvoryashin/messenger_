import { show_messages } from "./show_messages.js";
import { set_cookie } from "./modules/cookies/set_cookie.js";
import get_cookie from "./modules/cookies/get_cookie.js";
export function show_chats(user){
    $.ajax({
        method: "POST",
        url: "http://localhost/backend/show_chats.php",
        data: { show_chats_to_user: user }
    })
    .done(function(msg) {
        var chats = msg
        var messages_area = document.querySelector('.messages_area')
        chats = chats.split('|')
        chats = new Set(chats)
        chats = Array.from(chats)
        const chats_div = document.querySelector('.chats')
        for (var i=0; i<chats.length; i+=1){
            const chat = document.createElement('p')
            chat.className = 'chat'
            chat.textContent = chats[i]
            chat.onclick = function(){
                while (messages_area.firstChild) {
                    messages_area.removeChild(messages_area.firstChild);
                }
                show_messages(user, chat.textContent, 1)
                set_cookie('companion', chat.textContent)
                var chat_clone = document.querySelectorAll('.chat')
                chat_clone.forEach(chat => {
                    chat.style.color = 'black'
                })
                chat.style.color = 'green'
                const intervalId = setInterval(() => {
                    if(get_cookie('companion') == chat.textContent){
                        show_messages(user, chat.textContent, 0)
                    }
                    else{
                        clearInterval(intervalId)
                    }
                }, 2000);
            }
            chat.onmouseover = function(){
                chat.style.cursor = "pointer";
            }
            chats_div.appendChild(chat)
        }
    });
}

