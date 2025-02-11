const slides = document.querySelectorAll('.card');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dots = document.querySelectorAll('.dot');
const slider = document.getElementById('.slider');

const totalSlides = slides.length;
let slideIndex = 0;
let sliderInterval;

showSlides(slideIndex);
startSlider();

function showSlides(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].style.opacity = i === index ? '1' : '0.3';
    });
}

function autoSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}

function startSlider() {
    sliderInterval = setInterval(autoSlide, 3000);
}

function stopSlider() {
    clearInterval(sliderInterval);
}

prev.addEventListener('click', () => {
    stopSlider();
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    showSlides(slideIndex);
    startSlider();
});

next.addEventListener('click', () => {
    stopSlider();
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
    startSlider();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        stopSlider();
        slideIndex = i;
        showSlides(slideIndex);
        startSlider();
    });
});

slider.addEventListener('mouseover', stopSlider);
slider.addEventListener('mouseleave', startSlider);
