import { isLogin } from "./api.js";

document.cookie = "msession=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

$(document).ready(function () {
  $("#loginbtn").click(function (e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "" || password == "") {
      alert("Enter username/password");
    } else {
      var loginObj = {
        username: username,
        password: password,
      };
      isLogin(loginObj).then((res) => {
        const { valid } = res;
        if (valid) {
          window.location.href = "showOffers.html";
          document.cookie = "msession=true";
        } else alert("Invalid username/password");
      });
    }
  });
});
