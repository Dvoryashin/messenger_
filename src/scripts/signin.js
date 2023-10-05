
function get_cookie(cookie){
    var cookies = document.cookie.split('; ')
    for(var i = 0; i < cookies.length; i++){
        if (cookies[i].split('=')[0] == cookie){
            return cookies[i].split('=')[1]
        }
    }
    return cookies
}
function del_cookie(cookie){
    var cookies = document.cookie.split('; ')
    for(var i = 0; i < cookies.length; i++){
        if(cookies[i].split('=')[0] == cookie){
            cookies.pop(i)
            document.cookie = cookies.toString()
            console.log(cookies)
            return document.cookie
        }
    }
}

window.onload = function(){
    register_btn = document.getElementById("go_to_register")
    register_btn.onclick = function(){
        window.location.href = 'http://localhost/register.html'
    }
}
