const swiper = new Swiper('.goods-slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5.4,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      200: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 5.4,
        spaceBetween: 42,
      }
    }
});

const workers = new Swiper('.workers__cards', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 37,
  grabCursor: true,
  speed: 1000,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    200: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 42,
    }
  }
});

const member = new Swiper('.member__items', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  grabCursor: true,
  speed: 1000,
  pagination: {
    el: '.member__pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    200: {
      slidesPerView: 1.25,
      
    },
    900: {
      slidesPerView: 3,
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
      200: {
        navigation: {
          nextEl: null, // Убираем следующую стрелку
          prevEl: null, // Убираем предыдущую стрелку
        },
      },
      899: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
    breakpoints: {
      200: {
        slidesPerView: 1.2,
        navigation: {
          nextEl: '.awards-slider-next',
          prevEl: '.awards-slider-prev',
      },
      },
      900: {
        slidesPerView: 4,
      }
    }
});

// Инициализация превью слайдера
const sliderThumbs = new Swiper('.product-slider__thumbs .swiper-container', {
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 10,
  freemode: true,
  navigation: {
    nextEl: '.product-slider-thumbs--next',
    prevEl: '.product-slider-thumbs--prev'
  },
  speed: 1000,
  breakpoints: {
    0: {
      direction: 'horizontal',
      slidesPerView: 3,
    },
    768: {
      direction: 'vertical',
      slidesPerView: 3,
    }
  }
});

// Инициализация слайдера изображений
const sliderImages = new Swiper('.product-slider__images .swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 16,
  mousewheel: true,
  speed: 1000,
  navigation: {
    nextEl: '.product-slider--next',
    prevEl: '.product-slider--prev'
  },
  grabCursor: true,
  freemode: true,
  thumbs: {
    swiper: sliderThumbs
  },
  pagination: {
    el: '.product-slider__pagination',
  },
  breakpoints: {
    0: {
      direction: 'horizontal'
    },
    768: {
      direction: 'horizontal'
    }
  }
});

// Добавляем обработчик события slideChange для основного слайдера
sliderImages.on('slideChange', function () {
  const activeIndex = this.activeIndex - 1;
  sliderThumbs.slideTo(activeIndex); // Переключаем превью слайдер на соответствующий слайд
});


/*
const sliderThumbs = new Swiper('.swiper-container .my-thumbs', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 3, // показывать по 3 превью   
	spaceBetween: 10, // расстояние между слайдами
  freemode: true,
	navigation: { // задаем кнопки навигации
		nextEl: '.product-slider__btn-thumb--next', // кнопка Next
		prevEl: '.product-slider__btn-thumb--prev' // кнопка Prev
	},
  speed: 1000,
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});

const sliderImages = new Swiper('.product-slider__images .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'horizontal', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 16, // расстояние между слайдами
	mousewheel: true, // можно прокручивать изображения колёсиком мыши
  speed: 1000,    
	navigation: { // задаем кнопки навигации
		nextEl: '.product-slider--next', // кнопка Next
		prevEl: '.product-slider--prev' // кнопка Prev
	},
	grabCursor: true, // менять иконку курсора
  freemode: true,
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
	},
});
*/

/*
// Инициализация превью слайдера
const sliderThumbs = new Swiper('.product-slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 3, // показывать по 3 превью   
	spaceBetween: 10, // расстояние между слайдами
  freemode: true,
	navigation: { // задаем кнопки навигации
		nextEl: '.product-slider-thumbs--next', // кнопка Next
		prevEl: '.product-slider-thumbs--prev' // кнопка Prev
	},
  speed: 1000,
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
		nextEl: '.product-slider--next', // кнопка Next
		prevEl: '.product-slider--prev' // кнопка Prev
	},
	grabCursor: true, // менять иконку курсора
  freemode: true,
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
	},
});
*/
let modal = document.querySelector(".modal");
if(modal) {
  let images = document.querySelectorAll(".myImg");
  let modalImg = document.querySelector("#img01");
  let modalContent = document.querySelector('.modal__content')
  let span = document.querySelector(".modal__close");
  
  // Open the modal with the clicked image
  function openModal() {
    modal.classList.add('show')
    modalContent.classList.add('fadeTop')
    modalImg.src = this.querySelector("img").src;
    document.body.classList.add('no-scroll');
    modal.classList.remove('animate__fadeOut')
  }
  
  // Close the modal
  function closeModal() {
    modal.classList.remove('show')
    modalContent.classList.remove('fadeTop')
    document.body.classList.remove('no-scroll');
    overlay.classList.add('animate__fadeOut')
  }
  
  modal.addEventListener('click', closeModal)
  
  // Attach click event handlers to the images
  images.forEach(function (image) {
    image.addEventListener("click", openModal);
  });
  
  // Attach click event handler to the close button
  span.addEventListener("click", closeModal);
}


let back = document.querySelector('.back__wrapper');
let news = document.querySelector('.news__wrapper');

if (news) {
  back.style.marginTop = '0';
  news.style.marginTop = '15px'; // Измените значение отступа на нужное вам
} else if(back) {
  back.style.marginTop = '15px';
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
    //header.style.background = 'white'
  });
  
  menu.addEventListener('mouseleave', () => {
    menu.classList.remove('click')
    overlay.classList.remove('show');
    //header.style.background = 'rgba(255, 255, 255, 0.3)'
  })
}

const openButtonOrder = document.querySelectorAll('.gallery__item-btn--goods');
if(openButtonOrder) {
  const closePopupOrder = document.querySelector('.order-popup__close');
  const popupOrder = document.querySelector('.order-popup');
  const overlay = document.querySelector('.overlay')

  openButtonOrder.forEach(function(button) {
    button.addEventListener('click', () => {
      
      popupOrder.classList.remove('hidden')
      overlay.classList.add('show')
      document.body.classList.add('no-scroll');
      overlay.classList.remove('animate__fadeOut')
    });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('show')
    popupOrder.classList.add('hidden')
    document.body.classList.remove('no-scroll');
    overlay.classList.add('animate__fadeOut')
  })

    closePopupOrder.addEventListener('click', () => {
      overlay.classList.add('animate__fadeOut')
      popupOrder.classList.add('hidden')
      overlay.classList.remove('show')
      document.body.classList.remove('no-scroll');
    });
  });
}




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

/*
let gratitudeContent = document.querySelector('.gratitude__content')

gratitudeContent.addEventListener('click', (e) => {
  let gratitudeBtn = e.target
  if (gratitudeContent.classList.contains('.gratitude__btn')) {
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
})
*/

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

let gratitudeMobileBtn = document.querySelector('.gratitude-mobile__btn');

if(gratitudeMobileBtn) {
  let gratitude = document.querySelector('.gratitude-mobile')
  let gratitudeContent = document.querySelector('.gratitude-mobile__content')
  let gratitudePromo = document.querySelector('.gratitude-mobile__content-promo')
  let gratitudeClose = document.querySelector('.gratitude-mobile__close')

  gratitudeMobileBtn.addEventListener('click', () => {
    gratitudeContent.classList.add('hidden')
    gratitudePromo.classList.remove('hidden')
  })

    gratitudeClose.addEventListener('click', () => {
      gratitude.classList.add('animate__fadeOut');
      setTimeout(function() {
        gratitude.classList.add('hidden');
      }, 600);
  })
}


let btnCatalog = document.querySelector('.header-mobile__catalog');
let openMobMenu = document.querySelector('.card__open-menu--mobile')

if(btnCatalog) {
  let headerPopup = document.querySelector('.header-popup')
  let headerBtn = document.querySelector('.header-mobile__btn--catalog')

  function openPopup () {
    document.body.classList.toggle('mobile-no-scroll')
    headerPopup.classList.toggle('mobile-scroll')
    headerPopup.classList.toggle('active')
    headerBtn.classList.toggle('active')
  }

  btnCatalog.addEventListener('click', (e) => {
    e.preventDefault()
    openPopup()
  })

  if(openMobMenu) {
    openMobMenu.addEventListener('click', (e) => {
      e.preventDefault()
      openPopup()
    })
  }
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
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrolled > 105 && scrolled > scrollPrev) {
      header.classList.add('out');
    } else {
      header.classList.remove('out');
    }
 
    if(window.pageYOffset < 105) {
      header.style.background = 'white'
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.3)'
    }

    scrollPrev = scrolled;
  });
}




const dropdown = document.querySelector('.header__dropdown');
const overlay = document.querySelector('.main-overlay');

if(dropdown) {
  dropdown.addEventListener('mouseover', () => {
    overlay.classList.add('show');
    header.style.background = 'white'
  });
  
  dropdown.addEventListener('mouseout', () => {
    overlay.classList.remove('show');

    if(window.pageYOffset > 105) {
      header.style.background = 'rgba(255, 255, 255, 0.3)'
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

tippy('.red-help', {
  theme: 'dark',
  placement: 'right-start',
  content: 'jpg, jpeg, png, cdr, eps, ai, svg. Размер до 10мб',
  arrow: false, 
  allowHTML: true,
  maxWidth: 174,
});


const biilImgElements = document.querySelectorAll(".bill__img--left");

if(biilImgElements) {
  // Массив с путями к картинкам
  const images = [
    "/images/bill/men.svg",
    "/images/bill/men-2.svg"
  ];

  // Получаем случайный индекс из массива
  const randomIndex = Math.floor(Math.random() * images.length);

  // Устанавливаем случайно выбранную картинку для каждого элемента
  biilImgElements.forEach((imgElement) => {
    // Удаляем класс "bill__img--left" (или любой другой класс, если есть)

    // Устанавливаем случайно выбранную картинку в качестве источника (src)
    imgElement.src = images[randomIndex];
});
}

const ErrorimgElements = document.querySelectorAll(".error-404__img");

if(ErrorimgElements) {
  // Массив с путями к картинкам
  const images = [
    "/images/error-404/men.svg",
    "/images/error-404/men-1.svg",
    "/images/error-404/men-2.svg"
  ];

  // Получаем случайный индекс из массива
  const randomIndex = Math.floor(Math.random() * images.length);

  // Устанавливаем случайно выбранную картинку для каждого элемента
  ErrorimgElements.forEach((imgElement) => {
    // Удаляем класс "bill__img--left" (или любой другой класс, если есть)

    // Устанавливаем случайно выбранную картинку в качестве источника (src)
    imgElement.src = images[randomIndex];
});
}





const openButtonRelationsCustom = document.querySelector('.product__order ');
if(openButtonRelationsCustom) {
  const closePopupRelations = document.querySelector('.relations-popup__close');
  const popupRelations= document.querySelector('.relations-popup');
  const overlay = document.querySelector('.overlay')
  let releations = document.querySelector('.relations-popup__body')

  openButtonRelationsCustom.addEventListener('click', function(e) {
    e.preventDefault();
    popupRelations.classList.remove('hidden');
    overlay.classList.add('show')
    releations.classList.add('fadeTop')
    overlay.classList.remove('animate__fadeOut')
    document.body.classList.add('no-scroll');
  });

  overlay.addEventListener('click', () => {
    popupRelations.classList.add('hidden')
    overlay.classList.remove('show')
    document.body.classList.remove('no-scroll');
    overlay.classList.add('animate__fadeOut')
  })

  if(closePopupRelations) {
      closePopupRelations.addEventListener('click', function() {
      popupRelations.classList.add('hidden')
      overlay.classList.remove('show')
      document.body.classList.remove('no-scroll');
      overlay.classList.add('animate__fadeOut')
    });
  }
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
      textMoreBc.classList.add('opacity')
      buttonReadMore.textContent = 'Свернуть';
      isExpandedText = true;
    } else {
      textMore.classList.remove('product__more-text--show');
      textMoreBc.classList.remove('opacity')
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
  const tagContent = document.querySelector('.tag__content')
  isExpandedTag = false;

  buttonTagMore.addEventListener('click', function() {
    if (!isExpandedTag) {
      tagsMore.classList.add('click')
      buttonTagMore.textContent = 'Свернуть';
      tagMoreBc.classList.add('opacity')
      isExpandedTag = true;
    } else {
      tagsMore.classList.remove('click')
      buttonTagMore.textContent = 'Развернуть';
      tagMoreBc.classList.remove('opacity')
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



/*
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
*/
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
    overlay.classList.add('show')
    document.body.classList.add('no-scroll');
    overlay.classList.remove('animate__fadeOut')
  });

  overlay.addEventListener('click', () => {
    popupRelations.classList.add('hidden')
    overlay.classList.remove('show')
    document.body.classList.remove('no-scroll');
    overlay.classList.add('animate__fadeOut')
  })
  
  closePopupRelations.addEventListener('click', function() {
    popupRelations.classList.add('hidden')
    overlay.classList.remove('show')
    document.body.classList.remove('no-scroll');
    overlay.classList.add('animate__fadeOut')
  });
}


let goodsSlides = document.querySelectorAll('.goods-slider__body');

if (goodsSlides) {
  let goodsLinks = document.querySelectorAll('.goods__link-abst');

  goodsLinks.forEach(function(goodsLink, index) {
    goodsLink.addEventListener("mouseout", function() {
      goodsSlides[index].style.boxShadow = '0px 14px 20px rgba(0, 0, 0, 0.1)';
      goodsSlides[index].style.transform = "";
    });

    goodsLink.addEventListener("mouseover", function() {
      goodsSlides[index].style.boxShadow = '0px 14px 20px rgba(0, 0, 0, 0.15)';
      goodsSlides[index].style.transform = "scale(1.02)";
    });
  });
}


// Получаем ссылку на поле ввода и кнопку






let shareButton = document.querySelector(".bill__share");
if(shareButton) {
  let shareBlock = document.querySelector(".share");
  // Получаем ссылку на поле ввода и кнопку
  let button = document.querySelector('.share__btn');
  let buttonText = button.querySelector('p');
  let input = document.querySelector('.share__text');
  
  button.addEventListener('click', function() {
      input.select();
      document.execCommand('copy');
      
      buttonText.textContent = 'Скопировано!';
      button.disabled = true;
      button.classList.add('copied');
      
      setTimeout(function() {
          buttonText.textContent = 'Скопировать';
          button.disabled = false;
          button.classList.remove('copied');
      }, 1000);
  });
  
  
  shareButton.addEventListener("click", () => {
    shareBlock.classList.toggle("active");
  });

  window.addEventListener("click", function(event) {
    if (!shareBlock.contains(event.target) && !shareButton.contains(event.target)) {
      shareBlock.classList.remove("active");
    }
  });
}

let cartPopupTextareas = document.querySelectorAll(".textarea");

if(cartPopupTextareas) {
  cartPopupTextareas.forEach(function(textarea) {
  textarea.addEventListener("keyup", function() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight - 14) + "px";
  });
});
}


let select = document.querySelector('.select')
if(select) {
  let selectArrow = document.querySelector('.select-arrow')

  select.addEventListener('click', () => {
    selectArrow.classList.toggle('open')
  })
  
  if(selectArrow) {
    selectArrow.addEventListener('click', () => {
      selectArrow.classList.toggle('open')
    })
  }
}

const openButtonProduct = document.querySelectorAll('.cart-item__edit');
if(openButtonProduct) {
  const closeButtonProduct = document.querySelector('.cart-popup__close');
  const popupProduct = document.querySelector('.cart-popup');
  const overlay = document.querySelector('.overlay')
  const cancelBtn = document.querySelector('.cart-popup__cancel')

  function close (e) {
    popupProduct.classList.add('hidden')
    overlay.classList.remove('show');
    overlay.classList.add('animate__fadeOut')
    document.body.classList.remove('no-scroll');
    e.preventDefault()
  }

  openButtonProduct.forEach(function(button) {
    button.addEventListener('click', () => {
      popupProduct.classList.remove('hidden')
      overlay.classList.add('show');
      overlay.classList.remove('animate__fadeOut')
      document.body.classList.add('no-scroll');
    });
  
    overlay.addEventListener('click', close)
    closeButtonProduct.addEventListener('click', close);
    cancelBtn.addEventListener('click', (e) => {e.preventDefault(); close()});
  });
}

let galleryMore = document.querySelector('.gallery__more')

if(galleryMore) {
  let galleryItem = document.querySelector('.gallery__item--hidden')

  galleryMore.addEventListener('click', () => {
    galleryItem.classList.toggle('more')
    galleryMore.classList.add('hidden')
  })
}

let categoriesMore = document.querySelector('.categories__more')

if(categoriesMore) {
  let categoriesItem = document.querySelector('.categories-item--hidden')

  categoriesMore.addEventListener('click', () => {
    categoriesItem.classList.add('hidden')
    categoriesMore.classList.add('hidden')
  })
}


let productSliderImages = document.querySelector('.product-slider__images')
if(productSliderImages) {
  let arrowNext = document.querySelector('.product-slider__btn-main--next')
  let arrowPrev = document.querySelector('.product-slider__btn-main--prev')
  let productSlideDarkBcRight = document.querySelector('.product-slider__dark-bc--right')
  let productSlideDarkBcLeft = document.querySelector('.product-slider__dark-bc--left')

  arrowNext.addEventListener('click', () => {
    if(arrowNext.classList.contains('swiper-button-disabled')) {
      productSlideDarkBcRight.classList.add('hidden')
    } else {
      productSlideDarkBcRight.classList.remove('hidden')
    }
  })

  arrowPrev.addEventListener('click', () => {
    if(arrowPrev.classList.contains('swiper-button-disabled')) {
      productSlideDarkBcLeft.classList.add('hidden')
    } else {
      productSlideDarkBcLeft.classList.remove('hidden')
    }
  })
  
}


if(window.innerWidth < 899) {
  let orderForm = document.querySelector('.order-form__group-requisites')
  let radioElement7 = document.getElementById("radio7");
  let radioElement8 = document.getElementById("radio8");

  orderForm.classList.add('hidden')
  
  radioElement7.addEventListener("change", function() {
    if (this.checked) {
      orderForm.classList.remove('hidden')
    } else {
      orderForm.classList.add('hidden')
    }
  });
  
  radioElement8.addEventListener("change", function() {
    if (this.checked) {
      orderForm.classList.add('hidden')
    }
  });
}

