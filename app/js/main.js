const swiper = new Swiper('.goods-slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5.3,
    spaceBetween: 44,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const partnersSlider = new Swiper('.partners-slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5.5,
    spaceBetween: 100,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const mainSlider = new Swiper('.main-slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.main-slider__pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const exampleSlider = new Swiper('.example__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.example__pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


const swiper1 = new Swiper(".achievement-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 3
      },
      1560: {
        slidesPerView: 5
      }
    }
  });

  const awardsSlider = new Swiper('.awards-slider__slider', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 2,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 3, // показывать по 3 превью
	spaceBetween: 24, // расстояние между слайдами
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
});

const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
	direction: 'vertical', 
	slidesPerView: 1, 
	spaceBetween: 32, 
	thumbs: { // указываем на превью слайдер
		swiper: sliderThumbs // указываем имя превью слайдера
	},
});

