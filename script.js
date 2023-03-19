let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

function showSlides() {
    //iterate thrpugh lenth of slide and hide all
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //increment slide index by 1
  slideIndex++;
  //if slide index greate than no of slides, reset to 1
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }
  dots[slideIndex - 1].classList.add("active-dot");

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }
  dots[slideIndex - 1].classList.add("active-dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

showSlides();
