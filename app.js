const navLinks = document.querySelector(".nav-links");

const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-links");
});

const date = document.getElementById("date");
const currentYear = new Date().getFullYear();

date.innerHTML = currentYear;

const images = document.querySelectorAll(".image");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);

        if (entry.isIntersecting) {
            observer.unobserve(entry.target)
        }
    });
},
    {
        threshold: 0.8
    }
);

images.forEach(image => {
    observer.observe(image);
});