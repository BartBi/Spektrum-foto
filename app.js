const navLinks = document.querySelector(".nav-links");

const navBtn = document.querySelector(".nav-btn");

//   Menu button - Mobile layut 
navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-links");
});


// Current date set
const date = document.getElementById("date");
const currentYear = new Date().getFullYear();
date.innerHTML = currentYear;

// Select div containers for image
let images = document.querySelectorAll(".image");


// Images load plugin (with QueryJs) => Intersection observer 
const image = $(".image").imagesLoaded(() => {
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

//container selected (each islotated column of grid)
let page = document.querySelectorAll(".container");

// page selected - container for whole grid
let mainPage = document.querySelector(".page");

//  literally img by type selected 
let img = document.querySelectorAll('img');


for (let i = 0; i < images.length; i++) {
    
    let currentImg;
    let sliderPrev;
    let sliderNext;
    sliderNext = document.createElement("a"); // create prev button container
    let slider = document.createElement("div"); // create slider container
    sliderPrev = document.createElement("a"); // create prev button container
    
    function viewImg(){
     if(images[i].children[0].complete){
        images[i].classList.add("show");
     }
    }
    
    function sliderComponent(e) {
        page.forEach(j => j.style.display = 'none') // disable grid display
        images[i].classList.remove('show');
        
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
        
        setInterval(viewImg,500);
   
        

        //remove add event lister for image click
        images[i].removeEventListener("click", sliderComponent);
        //change current image 
        console.log(slider.children[1]);
        
    }
    images[i].classList.remove('show');

    // slider Next
    sliderNext.addEventListener("click", function () {
        
        i++
        console.log(i)
        let currentImg = images[i].children[0];
        console.log("----")
        console.log(currentImg)
        test1 = currentImg.src.replace(/gallery\W/, "gallery2/");
        currentImg.src = test1;
       console.log(slider.children[1]);
        slider.children[1].replaceWith(images[i]);
        console.log(images[i].children[0].src)
        currentImg.src = test1;
        images[i].classList.remove('show');
        setInterval(viewImg,500);
        
    })
    
    // slider Prev
    sliderPrev.addEventListener("click", function () {
        
        b = i--
        
        let currentImg = images[i].children[0];
        test1 = currentImg.src.replace(/gallery\W/, "gallery2/");
        currentImg.src = test1;
        slider.replaceChild(images[i],images[b]);
        
    })
    
    
    images[i].addEventListener("click", sliderComponent)  
    
}

})











