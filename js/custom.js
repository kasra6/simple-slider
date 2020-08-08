function nextPic(evt){
  evt.preventDefault();
  evt.stopPropagation();

  ++counter;
  activeImg.style.left = "-100%";
  if (counter >= 5){
    activeImg = document.querySelector(".slider .images img");
    activeImg.style.left = 0;
    counter = 0;
  } else{
    activeImg = activeImg.nextElementSibling;
    activeImg.style.left = 0;
  }
}

function prevPic(evt){
  evt.preventDefault();
  evt.stopPropagation();

  --counter;
  activeImg.style.left = "-100%";
  if (counter <= -1){
    activeImg = document.querySelector(".slider .images img:last-of-type");
    activeImg.style.left = 0;
    counter = 4;
  } else{
    activeImg = activeImg.previousElementSibling;
    activeImg.style.left = 0;
  }
}

const images = document.querySelector(".images");
let activeImg = document.querySelector(".slider .images img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let counter = 0;
activeImg.style.left = 0;

nextBtn.addEventListener("click", nextPic);
prevBtn.addEventListener("click", prevPic);
