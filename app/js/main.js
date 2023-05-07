const swiper = new Swiper('.goods-slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5.3,
    spaceBetween: 44,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
});

const partnersSlider = new Swiper('.partners-slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5.5,
    spaceBetween: 100,
    loop: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
});

const mainSlider = new Swiper('.main-slider', {
    slidesPerView: 'auto',
	spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    pagination: '.main-slider__pagination',
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
});

const achievementSlider = new Swiper('.achievement-slider', {
    slidesPerView: 5,
	centeredSlides: true,
	loop: true,
});

const exampleSlider = new Swiper('.example__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: '.example__pagination',
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
});

