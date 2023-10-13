
export function show_messages(user1, user2){
    $.ajax({
        method: "POST",
        url: "http://localhost/backend/show_messages.php",
        data: { user1: user1, user2: user2 }
    })
    .done(function(msg) {
        var messages = JSON.parse(msg)
        var amount = document.querySelectorAll('.messages_area')
        if (amount.length > 0){
            document.querySelector('.messages_area').remove()
        }
        const body = document.querySelector('body')
        const messages_area = document.createElement('div')
        messages_area.className = 'messages_area'
        body.appendChild(messages_area)
        for(var i = 0; i<messages[1].length; i++){
            const message = document.createElement('h1')
            message.className = 'message'
            message.textContent = messages[1][i]
            if(messages[2][i] == 'my'){
                message.style.color = 'green'
            }else{
                message.style.color = 'blue'
            }
            messages_area.appendChild(message)
        }
    });
    
}