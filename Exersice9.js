document.addEventListener("DOMContentLoaded", function () {
    const slideshowContainer = document.querySelector(".slideshow-container");
     const leftSplit = document.getElementById('leftSplit');
 const natureData = [
  {
    "ID": "section1",
      "Type": "image",
    "Image": "OutsideCampus%20.jpg",
 },
  {
    "ID": "section2",
      "Type": "image",
    "Image": "FlowerBedInCampus.jpg",
},
  {
    "ID": "section3",
      "Type": "image",
    "Image": "CloseUpoFlowerbed.jpg",
 },
  {
    "ID": "section4",
      "Type": "image",
    "Image": "FieldNearN7.jpg",
},
  {
    "ID": "section5",
      "Type": "image",
    "Image": "Kochi.jpg",
 },
  {
    "ID": "section6",
      "Type": "image",
    "Image": "CrownOfTrees.jpg",
},
  {
    "ID": "section7",
      "Type": "image",
    "Image": "Flowers.jpg",
},
  {
    "ID": "section8",
      "Type": "image",
    "Image": "Flowers2.jpg",
},
  {
    "ID": "section9",
      "Type": "image",
    "Image": "Flowers3.jpg",
},
  {
    "ID": "section10",
      "Type": "image",
    "Image": "Sunset.jpg",
},
   
];


 
 let slideIndex = 0;

    function showSlide(index) {
        const slide = document.createElement("div");
        slide.className = "mySlides fade";

        if (natureData[index].Type === "image") {
            slide.innerHTML = `
                <img src="${natureData[index].Image}" style="width:100%">
            `;
        } else if (natureData[index].Type === "video") {
            slide.innerHTML = `
                <video controls>
                    <source src="${natureData[index].Video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        }

        const prevSlide = slideshowContainer.querySelector(".mySlides.fade");
        if (prevSlide) {
            slideshowContainer.replaceChild(slide, prevSlide);
        } else {
            slideshowContainer.appendChild(slide);
        }
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % natureData.length;
        showSlide(slideIndex);
    }

    function previousSlide() {
        slideIndex = (slideIndex - 1 + natureData.length) % natureData.length;
        showSlide(slideIndex);
    }

    nextButton.addEventListener("click", nextSlide);
    previousButton.addEventListener("click", previousSlide);

    // Show the initial slide
 showSlide(slideIndex);
});

 
       
       