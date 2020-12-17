$(function() {
console.log("HELLO!");
	let phone_menu = document.querySelector(".phone-menu");
	let hamburger = document.querySelector(".sandvich-menu");
	hamburger.addEventListener("click", function(){
	phone_menu.classList.toggle("show"); });
	hamburger.classList.toggle("sandvich-menu2");
	// Custom JS
	console.log("HELLO2222!");
});
