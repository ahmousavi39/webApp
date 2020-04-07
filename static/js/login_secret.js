// $(document).ready(function () {
//     $("#login").click(function () {
//         console.log({ username : $("#username").val() ,password :  $("#password").val() }) ;
//         $.post("/" , { username : $("#username").val() ,password :  $("#password").val() } , function (data) {
//             $("#info").append("<p>" + data['status'] + " || " + data['msg'] + " </p>") ;
//         })
//     })
// }) ;






// var user = document.getElementById("username");
// var pass = document.getElementById("password");
var email = document.getElementById("materialLoginFormEmail");
var pass = document.getElementById("materialLoginFormPassword");



function da() {
var xhr = new XMLHttpRequest();
xhr.open("post", '/login_secret');


xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    }
}
xhr.send(JSON.stringify({email : email.value, password : pass.value}));
} 