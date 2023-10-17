import is_user_true from "http://localhost/scripts/is_user_true.js";
import find_user from "http://localhost/scripts/find_user.js"
import {show_chats} from "http://localhost/scripts/show_chats.js"
import get_cookie from "../modules/cookies/get_cookie.js";
import { send_message } from "http://localhost/scripts/send_message.js";
import { show_messages } from "../show_messages.js";

window.onload = function() {
    const user = get_cookie('true_user_name');
    is_user_true(user)
    show_chats(user)
    var find_user_btn = document.getElementById('find_user_btn')
    var message = document.getElementById('message_text')
    var send_message_btn = document.getElementById('send_message')
    var messages_area = document.querySelector('.messages_area')
    send_message_btn.onclick = function(){
        send_message(message.value, user, get_cookie('companion'))
        show_messages(user, get_cookie('companion'))
    }
    find_user_btn.onclick = find_user
    console.log('имя не должно содержать знак |')

}
document.querySelector('.messages_area').scrollTop = document.querySelector('.messages_area').scrollHeight;
