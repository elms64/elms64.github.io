// Improved version with let/const, arrow functions, and simplified logic

// IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER
const imageSlides = document.getElementsByClassName('imageSlides');
const circles = document.getElementsByClassName('circle');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
let counter = 0;
let imageSlideshowInterval; // Declare interval variable at the top

// HIDE ALL IMAGES FUNCTION
const hideImages = () => {
  Array.from(imageSlides).forEach(slide => slide.classList.remove('visible'));
};

// REMOVE ALL DOTS FUNCTION
const removeDots = () => {
  Array.from(circles).forEach(circle => circle.classList.remove('dot'));
};

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
const imageLoop = () => {
  const currentImage = imageSlides[counter];
  const currentDot = circles[counter];
  currentImage.classList.add('visible');
  removeDots();
  currentDot.classList.add('dot');
};

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    leftArrow.addEventListener('click', arrowClick);
    rightArrow.addEventListener('click', arrowClick);
  
    // Delay showing the first image
    setTimeout(() => {
      imageLoop(); // Show the first image after the delay
      imageSlideshowInterval = setInterval(slideshow, 10000);
    }, 1000); // Delay of 5 seconds before showing the first image
});

const arrowClick = (e) => {
  if (imageSlideshowInterval) clearInterval(imageSlideshowInterval); // Clear existing interval if defined
  hideImages();
  removeDots();
  counter = e.target === leftArrow ? (counter - 1 + imageSlides.length) % imageSlides.length : (counter + 1) % imageSlides.length;
  imageLoop();
  imageSlideshowInterval = setInterval(slideshow, 10000); // Reset interval
};

// IMAGE SLIDE FUNCTION
const slideshow = () => {
  hideImages();
  removeDots();
  counter = (counter + 1) % imageSlides.length; // Ensure counter wraps correctly
  imageLoop();
};

// Removed the initial setTimeout call to prevent the quick change to the second image





document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const images = document.querySelectorAll('.mobile-images img');
  if (images.length === 0) return; // Exit if no images

  function showNextImage() {
    // Set the current image to fade out
    images[currentIndex].style.opacity = 0;

    // Calculate the index of the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Set the next image to fade in
    images[currentIndex].style.opacity = 1;
  }

  // Initially, set all images except the first to opacity 0
  images.forEach((img, index) => {
    if (index !== 0) img.style.opacity = 0;
  });

  // Change image every 3 seconds
  setInterval(showNextImage, 3000);
});