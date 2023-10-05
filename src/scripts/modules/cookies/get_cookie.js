export default function get_cookie(cookie){
    var result = undefined
    var cookies = document.cookie.split(' ') 
    cookies.forEach(function(el){
      var el_list = el.split('=')
      if (el_list[0] == cookie){
        el_list = el_list[1].split('')
        if (el != cookies[cookies.length-1]){
          el_list.pop(el_list.length-1)
        }
        result = el_list.join('')
        result = decodeURIComponent(result)
      }
    });
    return result
}
