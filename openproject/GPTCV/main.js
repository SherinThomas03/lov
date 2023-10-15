//for harmburger :-)
const hamburger = document.querySelector(".hamburgermenu");
const navMenu = document.querySelector(".navigation-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navigation-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

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
window.location.href = "https://sherinthomas03.github.io/gptcv/openproject/GPTCV/index.html";
}
else {
alert("Incorrect username or password. Please try again.");
}
});
});
