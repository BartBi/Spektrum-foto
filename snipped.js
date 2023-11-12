// let currentImg;
// let sliderPrev;
// let sliderNext;
// sliderNext = document.createElement("a"); // create prev button container
// let slider = document.createElement("div"); // create slider container
// sliderPrev = document.createElement("a"); // create prev button container


//               page.forEach(j => j.style.display = 'none') // disable grid display
        
//               images[i].classList.remove('show');
              
//               slider.classList.add("sliderImg"); // add classlist for slider container 
//               mainPage.append(slider); // appen slider container     
       
       
       
       
//        // Prev button add
//        sliderPrev.classList.add("prev"); // add classlist for prev button
//        sliderPrev.innerHTML = "&#10094;" // add deicamlCode for prev butoon 
//        sliderPrev.style.color = "var(--grey-400)";
//        sliderPrev.style.color
//        slider.append(sliderPrev); // append prevbutton
       
//        // append current image container
//        slider.append(images[i]);
      
      
//       // Next button add
//       sliderNext.classList.add("next"); // add classlist for prev button
//       sliderNext.innerHTML = "&#10095;"
//       sliderNext.style.color = "var(--grey-400)";
//       slider.append(sliderNext);  
          
//           // change for better quality 
//           currentImg = images[i].children[0];
//           let test1 = currentImg.src.replace(/gallery\W/, "gallery2/");
//           currentImg.src = test1;
          
//           setInterval(viewImg,500);
          
//           //remove add event lister for image click
//           images[i].removeEventListener("click", sliderComponent);
    
//     // slider Next
//     sliderNext.addEventListener("click", function () {
        
//         i++
//         let currentImg = images[i].children[0];
//         test1 = currentImg.src.replace(/gallery\W/, "gallery2/");
//         currentImg.src = test1;    
//         images[i].classList.remove('show');
//         setInterval(viewImg,500);
        
//     })
    
//     // slider Prev
//     sliderPrev.addEventListener("click", function () {
        
//         b = i--
        
//         let currentImg = images[i].children[0];
//         test1 = currentImg.src.replace(/gallery\W/, "gallery2/");
//         currentImg.src = test1;
//         slider.replaceChild(images[i],images[b]);
        
//     })



    class Slider {
        constructor(query) {
            this.slider = document.querySelector(query); //element slider
            this.slides = [...this.slider.querySelectorAll(".slider-slide")];
            this.currentSlide = Math.max(0, this.slides.findIndex(el => el.classList.contains("is-active"))); //aktualny slide
        }
    }
    
    const slider = new Slider("#mySlider");
 console.log(slider);
 

