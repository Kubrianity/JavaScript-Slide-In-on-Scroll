function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
    sliderImages.forEach(slideImage => {
      // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        const imageBottom = slideImage.offsetTop + slideImage.height; // bottom of the image
        const isHalfShown = slideInAt > slideImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        isHalfShown && isNotScrolledPast ? slideImage.classList.add("active") : slideImage.classList.remove("active");
       })
}
window.addEventListener("scroll", debounce(checkSlide));