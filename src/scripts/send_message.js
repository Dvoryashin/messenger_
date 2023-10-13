export function send_message(message, sender_name, receiver_name){
    $.ajax({
        method: "POST",
        url: "http://localhost/backend/send_message.php",
        data: { message: message, sender_name: sender_name, receiver_name: receiver_name}
    })
    .done(function(msg){
        console.log(msg)

    })
}