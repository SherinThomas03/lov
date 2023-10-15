//for harmburger :-)

//for login :-)
document.addEventListener("DOMContentLoaded", function() {
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.querySelector("button");

loginButton.addEventListener("click", function(event) {
event.preventDefault();

const correctUsername = "123"; 
const correctPassword = "123"; 

if (
usernameInput.value === correctUsername &&
passwordInput.value === correctPassword
) {
    alert (1);
window.location.href = "https://sherinthomas03.github.io/gptcv/openproject/GPTCV/index.html";
}
else {
alert("Incorrect username or password. Please try again.");
}
});
});
