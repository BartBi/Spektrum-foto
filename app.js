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
        threshold: 0,
        rootMargin: '100px',
    }
);

images.forEach(image => {
    observer.observe(image);  
});


let images2 = document.querySelectorAll(".image");

images2 = [...images2];


    for(let i = 0; i< images2.length ;i++){
        images2[i].addEventListener("click",function (){

            images2[i].classList.toggle("large");
           
        });
    }

    