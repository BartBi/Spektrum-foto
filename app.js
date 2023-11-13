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

//  Make an array from array of nodes
images = [...images];

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

    let imgShow = document.querySelectorAll('show');
    console.log(imgShow);

    // Slider component 
    function sliderComponent(e) {

        // let largeSizeView = images[currentSlide].children[0].src.replace(/gallery\W/, "gallery2/");

        images.forEach(image => {
            observer.unobserve(image);
        });
        images.forEach(a => {
            a.classList.remove("show");
            a.children[0].src = a.children[0].src.replace(/gallery\W/, "gallery2/");
            
            if (a == e.target.parentNode) {
                a.style.opacity = "0";
                a.classList.add("show");
                setInterval(function test(){if(a.children[0].complete){a.style.opacity = "1" }},500);    
            }
        })


        // console.log(e.target.parentNode)


        // e.target.classList.add("show");

        // const test = e.target ; 
        // images[currentSlide].classList.add("show");

        currentSlide = Math.max(0, images.findIndex(el => el.classList.contains("show")));

        mainPage.classList.add("slider");
        page.forEach((j) =>
            j.classList.add("slider"));

        images.forEach(j => j.classList.add("slider"));

        btnPrev = document.createElement("button");
        btnPrev.type = "button";
        btnPrev.innerText = "Poprzedni slajd";
        btnPrev.classList.add("slider-button", "slider-button-prev");
        btnPrev.addEventListener("click", slidePrev)

        btnNext = document.createElement("button");
        btnNext.type = "button";
        btnNext.innerText = "Następny slajd"
        btnNext.classList.add("slider-button", "slider-button-next");
        btnNext.addEventListener("click", slideNext)

        mainPage.append(btnPrev);
        mainPage.append(btnNext);

        console.log(currentSlide);
        //remove add event lister for image click
        images.forEach(j => j.removeEventListener("click", sliderComponent));

    }


    function slideNext() {
        console.log(images[currentSlide].children[0].complete);
        currentSlide++
        if (currentSlide >= images.length) {
            currentSlide = 0
        }
        images.forEach(j => j.classList.remove("show"));
        images[currentSlide].classList.add("show")
    }

    function slidePrev() {
        currentSlide--
        if (currentSlide < 0) {
            currentSlide = images.length - 1;
        }
        images.forEach(j => j.classList.remove("show"));
        images[currentSlide].classList.add("show")
    }



    // setInterval(viewImg1,500);


    //  if(e.target.complete){
    //     e.target.parentNode.classList.add("show");
    // function viewImg(){
    //  }
    // }

    images.forEach(j => j.addEventListener("click", sliderComponent));

    // currentSlide.addEventListener("click", sliderComponent);







})











