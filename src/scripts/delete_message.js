export function delete_message(message_id){
    $.ajax({
        method: "POST",
        url: "http://localhost/backend/delete_message.php",
        data: { message_id_for_delete: message_id }
    })
    .done(function(msg){
        console.log(msg)
    })
}