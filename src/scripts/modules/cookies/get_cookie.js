export default function get_cookie(cookie){
    // console.log('ggg')
    var result = undefined
    var cookies = document.cookie.split(' ')
    cookies.forEach(function(el){
       var el_list = el.split('=')
       if (el_list[0] == cookie){
           el_list = el_list[1].split('')
           el_list.pop(el_list.length)
        // console.log(el_list[0])
           result = el_list[0]
       }
    });
    return result
}
