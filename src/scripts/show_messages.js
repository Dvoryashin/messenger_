import { delete_message } from "./delete_message.js";
import get_cookie from "./modules/cookies/get_cookie.js";
import { set_cookie } from "./modules/cookies/set_cookie.js";
export function show_messages(user1, user2){
    $.ajax({
        method: "POST",
        url: "http://localhost/backend/show_messages.php",
        data: { user1: user1, user2: user2 }
    })
    .done(function(msg) {
        console.log(msg)
        var messages = JSON.parse(msg)
        console.log(messages)
        var message_html = document.querySelectorAll('.message')
        var messages_area = document.querySelector('.messages_area')
        var len = message_html.length
        console.log(messages[0].length, len)
        console.log(messages_area)
        if(messages[0].length > len){
            for(var i = 0; i < messages[0].length - message_html.length; i++){
                var message = document.createElement('h1')
                message.className = 'message'
                console.log(messages[1][message_html.length+i])
                message.textContent = messages[1][message_html.length+i]
                if(messages[2][message_html.length+i] == 'my'){
                    message.style.color = 'green'
                }else{
                    message.style.color = 'blue'
                }
                messages_area.appendChild(message)
            }
        }
        console.log(messages_area)
    });
    
}
function check_updates(user1, user2){
    $.ajax({
        method: "POST",
        url: "http://localhost/backend/show_messages.php",
        data: { user1: user1, user2: user2 }
    })
    .done(function(msg){
        set_cookie('check_updates', msg)
    })
    return decodeURIComponent(get_cookie('check_updates'))
}