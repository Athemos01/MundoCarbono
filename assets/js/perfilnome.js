Parse.User.currentAsync().then(function (user) {
  document.getElementById("nomeuser").innerText = user.get("username");
});