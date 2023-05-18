// Инициализация превью слайдера
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