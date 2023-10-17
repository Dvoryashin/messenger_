export function delete_cookie(cookie_name){
    $.ajax({
        method: "POST",
        url: "http://localhost/backend/delete_cookie.php",
        data: { delete_cookie_name: cookie_name }
    })
    .done(function(msg){
        console.log(msg)
    })
}