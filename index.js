/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */


 
const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)


const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});


      let currentIndex = 0;
      const slides = document.querySelectorAll('.slide');
      const totalSlides = slides.length;
  
      function showSlide(index) {
          if (index < 0) {
              currentIndex = totalSlides - 1;
          } else if (index >= totalSlides) {
              currentIndex = 0;
          } else {
              currentIndex = index;
          }
  
          const translateValue = -currentIndex * 100 + '%';
          document.getElementById('slider').style.transform = 'translateX(' + translateValue + ')';
      }
  
      function nextSlide() {
          showSlide(currentIndex + 1);
      }
  
      function prevSlide() {
          showSlide(currentIndex - 1);
      }
  
      // Auto-play functionality
      let autoPlayInterval;
  
      function startAutoPlay() {
          autoPlayInterval = setInterval(nextSlide, 3500); // Change slide every 3 seconds (adjust as needed)
      }
  
      function stopAutoPlay() {
          clearInterval(autoPlayInterval);
      }
  
      // Event listeners for manual navigation
      document.getElementById('next').addEventListener('click', function() {
          stopAutoPlay();
          nextSlide();
      });
  
      document.getElementById('prev').addEventListener('click', function() {
          stopAutoPlay();
          prevSlide();
      });
  
      // Start auto-play when the page loads
      startAutoPlay();
 


