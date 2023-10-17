import { delete_message } from "./delete_message.js";
import get_cookie from "./modules/cookies/get_cookie.js";
import { set_cookie } from "./modules/cookies/set_cookie.js";
export function show_messages(user1, user2, auto_scroll){
    $.ajax({
        method: "POST",
        url: "http://localhost/backend/show_messages.php",
        data: { user1: user1, user2: user2 }
    })
    .done(function(msg) {
        var messages = JSON.parse(msg)
        var message_html = document.querySelectorAll('.message')
        var messages_area = document.querySelector('.messages_area')
        var len = message_html.length
        console.log(messages[0].length, message_html.length)
        if(messages[0].length > len){
            for(var i = 0; i < messages[0].length - message_html.length; i++){
                var delete_message_btn = document.createElement('button')
                delete_message_btn.innerHTML = 'Удалить сообщение'
                var message = document.createElement('h1')
                message.className = 'message'
                message.textContent = messages[1][message_html.length+i]
                delete_message_btn.message_id = messages[0][message_html.length+i]
                delete_message_btn.message = message
                if(messages[2][message_html.length+i] == 'my'){
                    message.style.color = 'green'
                }else{
                    message.style.color = 'blue'
                }
                delete_message_btn.onclick = function(evt){
                    evt.preventDefault()
                    delete_message(this.message_id)
                    this.message.remove()
                    this.remove()
                }
                messages_area.appendChild(message)
                messages_area.appendChild(delete_message_btn)
            }
        }
        if (auto_scroll == 1){
            messages_area.scrollTop = messages_area.scrollHeight
        }
    });
    
}