document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselInner = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.carousel-item');

    let slideIndex = 0;

function showSlide(index) {

slides.forEach((slide, i) => {

slide.style.transform = `translateX(${100 * (i - index)}%)`;});
}
function showNextSlide() {

    if (slideIndex < slides.length + 1 ) {
    
    slideIndex++;
    
    showSlide(slideIndex);
    
    }
    
    }
    
    function showPrevSlide() {
    
    if (slideIndex > 0) {
    
    slideIndex--;
    
    showSlide(slideIndex);
    
    }
    
    }
    nextBtn.addEventListener('click', showNextSlide);

prevBtn.addEventListener('click', showPrevSlide);

showSlide(slideIndex);

});

    
