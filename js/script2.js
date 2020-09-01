$(document).ready(function () {
  $(".design").click(function () {
    $("#des-img").toggle();
    $("#des-descriptions").toggle();
  });
});
$(document).ready(function () {
  $(".dev").click(function () {
    $("#dev-img").toggle();
    $("#dev-we-description").toggle();
  });
});
$(document).ready(function () {
  $(".product").click(function () {
    $("#prod-img").toggle();
    $("#management-we-description").toggle();
  });
});
function sendMessage() {
  var uName = document.getElementById("uname").value;
  var uEmail = document.getElementById("uemail").value;
  var uMessage = document.getElementById("umessage").value;

  if (usName.length == 0) {
    alert("enter your name");
    usName.focus();

    if (uEmail.length == 0) {
      alert("enter your name");
      uName.focus();
    }

    if (usersMessage.length == 0) {
      alert("enter your name");
      usName.focus();
    }
  } else {
    alert("We have recieved your message, thank you for your response");
  }

  return (content = ["uName", "uEmail", "uMessage"]);
}
function sendMessage(form) {
  var uName = document.forms["mc-embedded-subscribe-form"]["name"].value;
  var uEmail = document.forms["mc-embedded-subscribe-form"]["e-mail"].value;
  var uMessage = document.forms["mc-embedded-subscribe-form"]["message"].value;
  alert(
    "hello " +
      uName +
      " we have recieved your message, thank you for your response"
  );
}
