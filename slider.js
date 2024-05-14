function Slider() {
    const carouselSlides = document.querySelectorAll('.slide');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;

    const changeSlide = function (slideIndex) {
        currentSlide = slideIndex;
        carouselSlides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.opacity = 1;
            } else {
                slide.style.opacity = 0;
            }
        });
    };
    changeSlide(currentSlide);

    const nextSlide = function () {
        currentSlide++;
        if (currentSlide >= carouselSlides.length) {
            currentSlide = 0;
        }
        changeSlide(currentSlide);
    };

    const prevSlide = function () {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = carouselSlides.length - 1;
        }
        changeSlide(currentSlide);
    };

    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prevSlide);

    const startSlideShow = function () {
        slideInterval = setInterval(nextSlide, 2000);
    };
    startSlideShow();

    const stopSlideShow = function () {
        clearInterval(slideInterval);
    };

    carouselSlides.forEach(slide => {
        slide.addEventListener('mouseenter', stopSlideShow);
        slide.addEventListener('mouseleave', startSlideShow);
    });

    btnPrev.addEventListener('mouseenter', stopSlideShow);
    btnPrev.addEventListener('mouseleave', startSlideShow);
    btnNext.addEventListener('mouseenter', stopSlideShow);
    btnNext.addEventListener('mouseleave', startSlideShow);
}

Slider();
