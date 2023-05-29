const swiper = new Swiper('.goods-slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5.5,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      200: {
        slidesPerView: 2.7,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 5.5,
        spaceBetween: 42,
      }
    }
});

const partnersSlider = new Swiper('.partners-slider', {
    direction: 'horizontal',
    slidesPerView: 5.5,
    spaceBetween: 100,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
      200: {
        slidesPerView: 2.7,
        spaceBetween: 30,
        navigation: {
          nextEl: null, // Убираем следующую стрелку
          prevEl: null, // Убираем предыдущую стрелку
        }
      },
      900: {
        slidesPerView: 5.5,
        spaceBetween: 100,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      }
    }
  });

const mainSlider = new Swiper('.main-slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    initialSlide: 0,
    pagination: {
      el: '.main-slider__pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false 
    },
    speed: 1000,

    breakpoints: {
      451: {
        navigation: {
          nextEl: null, // Убираем следующую стрелку
          prevEl: null, // Убираем предыдущую стрелку
        },
      }
    }
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
    },
    speed: 1000,
});

const swiper1 = new Swiper(".achievement-slider", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView : 3,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 800,
    breakpoints: {
      200: {
        effect: 'slide', // Добавление эффекта для ширины экрана 899px и выше
        slidesPerView: 'auto',
        spaceBetween: 0,
        spaceBetween: 10,
        navigation: {
          nextEl: null, // Убираем следующую стрелку
          prevEl: null, // Убираем предыдущую стрелку
        },
        centeredSlides: true,
      },
      900: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView : 3,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
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
    },
});

// Инициализация превью слайдера
const sliderThumbs = new Swiper('.product-slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 3, // показывать по 3 превью   
	spaceBetween: 10, // расстояние между слайдами
  autoScrollOffset: 1,
  multipleActiveThumbs: false,
	navigation: { // задаем кнопки навигации
		nextEl: '.product-slider__next', // кнопка Next
		prevEl: '.product-slider__prev' // кнопка Prev
	},
  speed: 1000,
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});



// Инициализация слайдера изображений
const sliderImages = new Swiper('.product-slider__images .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'horizontal', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 16, // расстояние между слайдами
	mousewheel: true, // можно прокручивать изображения колёсиком мыши
  speed: 1000,    
	navigation: { // задаем кнопки навигации
		nextEl: '.product-slider__next', // кнопка Next
		prevEl: '.product-slider__prev' // кнопка Prev
	},
	grabCursor: true, // менять иконку курсора
	thumbs: { // указываем на превью слайдер
		swiper: sliderThumbs // указываем имя превью слайдера
	},
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'horizontal', // вертикальная прокрутка
		}
	}
});



let modal = document.querySelector("#myModal");
if(modal) {
  let images = document.querySelectorAll(".myImg");
  let modalImg = document.querySelector("#img01");
  let span = document.querySelector(".modal__close");
  
  // Open the modal with the clicked image
  function openModal() {
    modal.style.display = "block";
    modalImg.src = this.querySelector("img").src;
  }
  
  // Close the modal
  function closeModal() {
    modal.style.display = "none";
  }
  
  modal.addEventListener('click', () => {
    modal.style.display = "none";
  })
  
  // Attach click event handlers to the images
  images.forEach(function (image) {
    image.addEventListener("click", openModal);
  });
  
  // Attach click event handler to the close button
  span.addEventListener("click", closeModal);
}


/*
const sliderThumbs = new Swiper('.product-slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 3, // показывать по 3 превью
	spaceBetween: 24, // расстояние между слайдами
	navigation: {
    nextEl: '.product-slider__btn-thumb--next',
    prevEl: '.product-slider__btn-thumb--prev',
  },
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.product-slider__images .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'horizontal', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 32, // расстояние между слайдами
	mousewheel: true, // можно прокручивать изображения колёсиком мыши
	grabCursor: true, // менять иконку курсора
	thumbs: { // указываем на превью слайдер
		swiper: sliderThumbs // указываем имя превью слайдера
	},
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'horizontal', // вертикальная прокрутка
		}
	}
});
*/

// COUNTER
function stepper(btn) {
  let container = btn.parentNode; // Получаем родительский контейнер кнопки
  let input = container.querySelector('.counter__input'); // Находим соответствующий input
  let minus = container.querySelector('.disabled-minus')
  let min = input.getAttribute("min");
  let max = input.getAttribute("max");
  let step = input.getAttribute("step");
  let val = input.value; // Получаем текущее значение

  let calcStep = (btn.classList.contains("counter__btn--plus")) ? (step * 1) : (step * -1);
  let newValue = parseInt(val) + calcStep;

  if (newValue >= min && newValue <= max) {
    input.value = newValue; // Устанавливаем новое значение

    if (newValue === 1) {
      minus.classList.add("disabled"); // Добавляем класс "disabled" для кнопки с классом "counter__btn--minus"
    } else {
      minus.classList.remove("disabled"); // Удаляем класс "disabled" для кнопки с классом "counter__btn--minus"
    }
  }
}

/*
let plus = document.querySelectorAll('.counter__btn--plus')
let minus = document.querySelectorAll('.counter__btn--minus')
let input = document.querySelector('.counter__input');
let val = input.getAttribute("value");

plus.forEach(item => {
  item.addEventListener('click', () => {
    btnMinus()
  })
})

function btnMinus () {
  minus.forEach(item => {
    if (val <= 1) {
        item.classList.add('disabled')
    } else {
      item.classList.remove('disabled')
    }
  })
}
*/


/*
if (val <= 1) {
  if(btn.classList.contains("counter__btn--minus")) {
    btn.classList.add('disabled')
  }
} else {
  btn.classList.remove('disabled')
}*/
/*
const counters = document.querySelectorAll('[data-counter]');

if (counters) {
	counters.forEach(counter => {
		counter.addEventListener('click', e => {
			const target = e.target;

			if (target.closest('.counter__button')) {
				if (target.closest('.counter').querySelector('input').value == '' && (target.classList.contains('counter__button_minus') || target.classList.contains('counter__button_plus'))) {
					target.closest('.counter').querySelector('input').value = 1;
				}

				let value = parseInt(target.closest('.counter').querySelector('input').value);

				if (target.classList.contains('counter__button_plus')) {
					value++;
				} else {
					--value;
				}

				if (value <= 0) {
					value = 0;
					target.closest('.counter').querySelector('.counter__button_minus').classList.add('disabled')
				} else {
					target.closest('.counter').querySelector('.counter__button_minus').classList.remove('disabled')
				}

				target.closest('.counter').querySelector('input').value = value;
			}
		})
	})	
}*/
//Open Menu
let btnOpenMenu = document.querySelector('.card__open-menu');

if(btnOpenMenu) {
  let menu = document.querySelector('.header__dropdown-wrapper');

  btnOpenMenu.addEventListener('click', () => {
    menu.classList.add('click')
    header.classList.remove('out')
    overlay.classList.add('show');
    header.style.background = 'white'
  });
  
  menu.addEventListener('mouseleave', () => {
    menu.classList.remove('click')
    overlay.classList.remove('show');
    header.style.background = 'rgba(255, 255, 255, 0.3)'
  })
}


const openButtonOrder = document.querySelectorAll('.gallery__item-btn');
if(openButtonOrder) {
  const closePopupOrder = document.querySelector('.order-popup__close');
  const popupOrder = document.querySelector('.order-popup');
  const overlay = document.querySelector('.overlay')

  openButtonOrder.forEach(function(button) {
    button.addEventListener('click', () => {
      popupOrder.classList.add('animate__fadeIn')
      header.style.zIndex = '0'
      popupOrder.classList.remove('hidden')
      overlay.classList.remove('hidden')
    });

  overlay.addEventListener('click', () => {
    overlay.classList.add('hidden')
    popupOrder.classList.add('hidden')
  })

    closePopupOrder.addEventListener('click', () => {
      header.style.zIndex = '98'
      popupOrder.classList.add('hidden')
      overlay.classList.add('hidden')
    });
  });
}

const dropdown = document.querySelector('.header__dropdown');
const overlay = document.querySelector('.main-overlay');

dropdown.addEventListener('mouseover', () => {
  overlay.classList.add('show');
  header.style.background = 'white'
});

dropdown.addEventListener('mouseout', () => {
  overlay.classList.remove('show');
  header.style.background = 'rgba(255, 255, 255, 0.3)'
});


/*
// Read More
let buttonMore = document.querySelector('.product__read-more');
let isExpandedText = false;

if(buttonMore) {
  let textMore = document.querySelector('.product__text-more');
  let textMoreBc = document.querySelector('.product__white-bc');

  buttonMore.addEventListener('click', () => {
    if (!isExpandedText) {
      textMore.classList.add('product__more-text--show');
      textMoreBc.classList.add('hidden');
      buttonMore.textContent = 'Скрыть';
      isExpandedText = true;
    } else {
      textMore.classList.remove('product__more-text--show');
      textMoreBc.classList.remove('hidden');
      buttonMore.textContent = 'Развернуть';
      isExpandedText = false;
    }
  });
}
*/

// Gallery More tag
const buttonGalleryMoreTags = document.querySelector('.more-btn__tags');

if(buttonGalleryMoreTags) {
  let moreBtnTags = document.querySelector('.more-btn__tags');
  let moreBtnClose = document.querySelector('.more-btn__close')
  let galleryMoreTags = document.querySelector('.gallery__more-tags')

  moreBtnTags.addEventListener('click', () => {
    moreBtnTags.classList.add('hidden')
    moreBtnClose.classList.remove('hidden')
    galleryMoreTags.classList.add('click')
  })

  moreBtnClose.addEventListener('click', () => {
    moreBtnClose.classList.add('hidden')
    moreBtnTags.classList.remove('hidden')
    galleryMoreTags.classList.remove('click')
  })
}

//Show promokod 
let gratitudeBtn = document.querySelector('.gratitude__btn');

if(gratitudeBtn) {
  let gratitude = document.querySelector('.gratitude')
  let gratitudeContent = document.querySelector('.gratitude__content')
  let gratitudePromo = document.querySelector('.gratitude__content-promo')
  let gratitudeClose = document.querySelector('.gratitude__close')

  gratitudeBtn.addEventListener('click', () => {
    gratitudeContent.classList.add('hidden')
    gratitudePromo.classList.remove('hidden')
  })

    gratitudeClose.addEventListener('click', () => {
      gratitude.classList.add('animate__fadeOut');
      setTimeout(function() {
        gratitude.classList.add('hidden');
      }, 1000);
  })
}

// Получаем все кнопки тегов
const tagButtons = document.querySelectorAll('.gallery__tag');
if(tagButtons) {
  const tagsButtonAll = document.querySelector('.gallery__tag--all')

  tagButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if(button.classList.contains('gallery__tag--all')) {
        tagButtons.forEach(item => {
          item.classList.remove('tag-active')
        })
        button.classList.add('tag-active')
      } else {
        tagsButtonAll.classList.remove('tag-active');
        button.classList.toggle('tag-active')
      }
  
    });
  });
}


const tagButtonsCateg = document.querySelectorAll('.categories__tag');
if(tagButtonsCateg) {
  const tagsButtonCategAll = document.querySelector('.categories__tag--all')
  // Обрабатываем каждую кнопку тега
  tagButtonsCateg.forEach((button) => {
    button.addEventListener('click', () => {
      if(button.classList.contains('categories__tag--all')) {
        tagButtonsCateg.forEach(item => {
          item.classList.remove('categories__tag--active')
        })
        button.classList.add('categories__tag--active')
      } else {
        tagsButtonCategAll.classList.remove('categories__tag--active');
        button.classList.toggle('categories__tag--active')
      }
  
    });
  });
}



document.querySelectorAll('.goods-slider__heading').forEach(title => {
  const titleText = title.querySelector('.goods-slider__title')
  if(titleText.offsetWidth < title.offsetWidth) {
    titleText.style.animationPlayState = 'paused'
  }
})

document.querySelectorAll('.cart-item__heading').forEach(title => {
  const titleText = title.querySelector('.cart-item__title')
  if(titleText.offsetWidth < title.offsetWidth) {
    titleText.style.animationPlayState = 'paused'
  }
})

const cartTotalElement = document.querySelector('cart-total');
const cartElement = document.querySelector('.cart');

// Обработчик события прокрутки
let header = document.querySelector('.header');
if(header) {
  let scrollPrev = 0;

  window.addEventListener('scroll', function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrolled > 97 && scrolled > scrollPrev) {
      header.classList.add('out');
    } else {
      header.classList.remove('out');
    }
  
    scrollPrev = scrolled;
  });
}

const bill = document.querySelector('.bill__body');
let isScrolledOver100 = false;

if (bill) {
  window.addEventListener('scroll', function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 100 && !isScrolledOver100) {
      setTimeout(function () {
        bill.style.top = '550px';
      }, 1000);
      setTimeout(function () {
        bill.style.top = '350px';
      }, 2000);
      setTimeout(function () {
        bill.style.top = '300px';
      }, 3000);
      setTimeout(function () {
        bill.classList.add('up');
      }, 4000);

      isScrolledOver100 = true;
    } else if (scrolled <= 100 && isScrolledOver100) {
      bill.classList.add('up');
      isScrolledOver100 = false;
    }
  });
}

function validateInput(event) {
  var char = event.which || event.keyCode;
  if ((char < 65 || char > 90) && (char < 97 || char > 122) && (char < 1040 || char > 1103) && char !== 1025 && char !== 1105) {
      event.preventDefault();
  }
}

function validateInputTel(event) {
  var char = String.fromCharCode(event.which || event.keyCode);
  var pattern = /[0-9+()\-\s]/;
  if (!pattern.test(char)) {
      event.preventDefault();
  }
}

tippy('.sale-tooltip', {
  theme: 'red',
  placement: 'right-start',
  content: 'До конца акции<br>5 дней, 5 часов и 5 минут!',
  arrow: false, 
  allowHTML: true,
  maxWidth: 156,
});

tippy('.question-red', {
  theme: 'red',
  placement: 'right-start',
  content: 'Краткая подсказка: например, по цене: ещё раз повторить, что она не окончательная',
  arrow: false, 
  allowHTML: true,
  maxWidth: 156,
});

tippy('.question-grey', {
  theme: 'grey',
  placement: 'right-start',
  content: 'Краткая подсказка: например, по цене: ещё раз повторить, что она не окончательная',
  arrow: false, 
  allowHTML: true,
  maxWidth: 185,
});

tippy('.custom-form__help', {
  theme: 'dark',
  placement: 'right-start',
  content: 'jpg, jpeg, png, cdr, eps, ai, svg. Размер до 10мб',
  arrow: false, 
  allowHTML: true,
  maxWidth: 174,
});



const openButtonRelationsCustom = document.querySelector('.product__order ');
if(openButtonRelationsCustom) {
  const closePopupRelations = document.querySelector('.relations-popup__close');
  const popupRelations= document.querySelector('.relations-popup');
  const overlay = document.querySelector('.overlay')

  openButtonRelationsCustom.addEventListener('click', function(e) {
    e.preventDefault();
    popupRelations.classList.remove('hidden');
    overlay.classList.remove('hidden')
  });

  overlay.addEventListener('click', () => {
    popupRelations.classList.add('hidden')
    overlay.classList.add('hidden')
  })
  
  closePopupRelations.addEventListener('click', function() {
    popupRelations.classList.add('hidden')
    overlay.classList.add('hidden')
  });
}

// Promo Input Active
let cartTotalInput = document.querySelector('.cart-total__input');

if (cartTotalInput) {
  let enterBtn = document.querySelector('.cart-total__enter');

  cartTotalInput.addEventListener('input', () => {
    if (cartTotalInput.value == '') {
      enterBtn.classList.remove('promo-active');
    } else {
      enterBtn.classList.add('promo-active');
    }
  });
}

// Product Read Mor
let buttonReadMore = document.querySelector('.product__read-more');
if(buttonReadMore) {
  let textMore = document.querySelector('.product__text-more');
  let textMoreBc = document.querySelector('.product__white-bc');
  let isExpandedText = false;
  
  buttonReadMore.addEventListener('click', () => {
    if (!isExpandedText) {
      textMore.classList.add('product__more-text--show');
      textMoreBc.classList.add('hidden');
      buttonReadMore.textContent = 'Скрыть';
      isExpandedText = true;
    } else {
      textMore.classList.remove('product__more-text--show');
      textMoreBc.classList.remove('hidden');
      buttonReadMore.textContent = 'Развернуть';
      isExpandedText = false;
    }
  });
}

// Tag More Btn
const buttonTagMore = document.querySelector('.tag__more-btn');
if(buttonTagMore) {
  const tagsMore = document.querySelector('.tag__more-tags');
  const tagMoreBc = document.querySelector('.tag__white-bc');
  isExpandedTag = false;

  buttonTagMore.addEventListener('click', function() {
    if (!isExpandedTag) {
      tagsMore.classList.add('click')
      tagMoreBc.classList.add('hidden')
      buttonTagMore.textContent = 'Скрыть';
      isExpandedTag = true;
    } else {
      tagsMore.classList.remove('click')
      tagMoreBc.classList.remove('hidden')
      buttonTagMore.textContent = 'Развернуть';
      isExpandedTag = false;
    }
  });
}


let orderFormGroup = document.querySelector(".order-form__group-requisites");

if(orderFormGroup) {
  let radioElement7 = document.getElementById("radio7");
  let radioElement8 = document.getElementById("radio8");
  
  radioElement7.addEventListener("change", function() {
    if (this.checked) {
      orderFormGroup.style.opacity = "1";
    } else {
      orderFormGroup.style.opacity = "0";
    }
  });
  
  radioElement8.addEventListener("change", function() {
    if (this.checked) {
      orderFormGroup.style.opacity = "0";
    }
  });
}




var animatedElement = document.querySelectorAll('.ani');
var scrollTimeout;

// Обработчик события прокрутки страницы
window.addEventListener('scroll', function() {
  // Очищаем предыдущий таймаут, чтобы избежать множественных вызовов изменения прозрачности
    // Получаем текущую позицию прокрутки страницы
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Проверяем, достигла ли прокрутка определенного значения (например, 200)
    if (scrollTop >= 700) {
      console.log(scrollTop);
      // Вычисляем прозрачность элемента в зависимости от направления прокрутки
      var opacity = (scrollTop - 700) / 600; // 1300 - высота, на которой элемент полностью исчезнет

      // Ограничиваем прозрачность от 0 до 1
      opacity = Math.min(Math.max(opacity, 0), 1);

      // Применяем прозрачность к элементу
      animatedElement.forEach(item => {
        item.style.opacity = opacity;
      })
    } 
});

// Fast Order PopUp
const openButtonRelations = document.querySelector('.product__order');


const customFormOrder = document.querySelector('.custom-form__order ')
if(customFormOrder) {
  const closePopupRelations = document.querySelector('.relations-popup__close');
  const popupRelations= document.querySelector('.relations-popup');
  const overlay = document.querySelector('.overlay')

  customFormOrder.addEventListener('click', function(e) {
    e.preventDefault();
    popupRelations.classList.remove('hidden');
    overlay.classList.remove('hidden')
  });

  overlay.addEventListener('click', () => {
    popupRelations.classList.add('hidden')
    overlay.classList.add('hidden')
  })
  
  closePopupRelations.addEventListener('click', function() {
    popupRelations.classList.add('hidden')
    overlay.classList.add('hidden')
  });
}


const openButtonProduct = document.querySelectorAll('.cart-item__edit');
if(openButtonProduct) {
  const closeButtonProduct = document.querySelector('.cart-popup__close');
  const popupProduct = document.querySelector('.cart-popup');
  const overlay = document.querySelector('.overlay')

  overlay.addEventListener('click', () => {
    popupProduct.classList.add('hidden')
    overlay.classList.add('hidden')
  })

  openButtonProduct.forEach(function(button) {
    button.addEventListener('click', () => {
      popupProduct.classList.remove('hidden')
      overlay.classList.remove('hidden')
    });
  
    closeButtonProduct.addEventListener('click', function() {
      popupProduct.classList.add('hidden')
      overlay.classList.add('hidden')
    });
  });
}



