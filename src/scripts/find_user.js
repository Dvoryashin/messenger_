export default function find_user() {

    var searched_user = document.getElementById('searched_user').value
    $.ajax({
      method: "POST",
      url: "http://localhost/backend/find_user.php",
      data: { searched_user: searched_user}
    })
    .done(function(msg) {
      if (msg == 1){
        window.location = 'http://localhost/profile.html'
      }else{
        console.log(msg)
        console.log('такого пользователя нет')
      }
    });

  }