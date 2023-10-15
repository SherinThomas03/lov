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
window.location.href = "openproject/GPTCV/index.html";
}
else {
alert("Incorrect username or password. Please try again.");
}
});
});
