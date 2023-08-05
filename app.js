const navLinks = document.querySelector(".nav-links");

const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-links");


});

const date = document.getElementById("date");
const currentYear = new Date().getFullYear();

date.innerHTML = currentYear;

