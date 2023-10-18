const navLinks = document.querySelector(".nav-links");

const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-links");

});

const date = document.getElementById("date");
const currentYear = new Date().getFullYear();

date.innerHTML = currentYear;

let images = document.querySelectorAll(".image");

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
        rootMargin: '0px',
    }
);

images.forEach(image => {
    observer.observe(image);
});



let page = document.querySelectorAll(".container");//container selected 
// console.log(page)
let mainPage = document.querySelector(".page");

// let slider = document.querySelector(".sliderImg");

let img = document.querySelectorAll('img');

page = [...page];   // making array from "nodes array"



for (let i = 0; i < images.length; i++) {

    let currentImg;
    let sliderPrev;
    let sliderNext;
    sliderNext = document.createElement("a"); // create prev button container
    let slider = document.createElement("div"); // create slider container
    sliderPrev = document.createElement("a"); // create prev button container
    let b

    function sliderComponent(e) {
        page.forEach(j => j.style.display = 'none') // disable grid display
        
        slider.classList.add("sliderImg"); // add classlist for slider container 
        mainPage.append(slider); // appen slider container 

        
        sliderPrev.classList.add("prev"); // add classlist for prev button
        sliderPrev.innerHTML = "&#10094;" // add deicamlCode for prev butoon 
        sliderPrev.style.color = "var(--grey-400)";
        sliderPrev.style.color
        slider.append(sliderPrev); // append prevbutton
        slider.append(images[i]); // append current image container
        sliderNext.classList.add("next"); // add classlist for prev button
        sliderNext.innerHTML = "&#10095;"
        sliderNext.style.color = "var(--grey-400)";
        slider.append(sliderNext);
       
        // change for better quality 
        currentImg = images[i].children[0];
        let test1 = currentImg.src.replace(/gallery\W/, "gallery2/");
        currentImg.src = test1;
        // images[b].removeEventListener("click", sliderComponent);
        //remove add event lister for image click
        images[i].removeEventListener("click", sliderComponent);
        
        //change current image 
        
    }
    
    sliderNext.addEventListener("click", function () {
        
        b = i++
        
        let currentImg = images[i].children[0];
         test1 = currentImg.src.replace(/gallery\W/, "gallery2/");
        currentImg.src = test1;
        slider.replaceChild(images[i],images[b]);
       
    })

    sliderPrev.addEventListener("click", function () {
        
        b = i--
        
        let currentImg = images[i].children[0];
         test1 = currentImg.src.replace(/gallery\W/, "gallery2/");
        currentImg.src = test1;
        slider.replaceChild(images[i],images[b]);
       
    })
    
    images[i].addEventListener("click", sliderComponent);




}












