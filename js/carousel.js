document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');

    let currentIndex = 0;

    function updateCarousel() {
        if (carouselInner) {
            carouselInner.style.transform = translateX(-${currentIndex * 100}%);
        }
    }

    prevBtn.addEventListener('click', () => {
        if (items.length > 0) {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (items.length > 0) {
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        }
    });

    updateCarousel();
});