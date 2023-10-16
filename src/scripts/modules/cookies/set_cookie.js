export function set_cookie(cookie_name, cookie_value){
    $.ajax({
        method: "POST",
        url: "http://localhost/backend/set_cookie.php",
        data: { set_cookie_name: cookie_name, set_cookie_value: cookie_value }
    })
    .done(function(msg){

    })
}