export function show_messages(user1, user2){
    $.ajax({
        method: "POST",
        url: "http://localhost/backend/show_messages.php",
        data: { user1: user1, user2: user2 }
    })
    .done(function(msg) {
        
    });
    
}