const swiper = new Swiper('.goods-slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5.3,
    spaceBetween: 42,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const partnersSlider = new Swiper('.partners-slider', {
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
    lazy: {
      enabled: false
    },
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      },
      1560: {
        slidesPerView: 3
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


const sliderThumbs = new Swiper('.product-slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 3, // показывать по 3 превью
	spaceBetween: 10, // расстояние между слайдами
  navigation: {
    nextEl: '.product-slider__btn-thumb--next',
    prevEl: '.product-slider__btn-thumb--prev',
  },
});

const sliderImages = new Swiper('.product-slider__images .swiper-container', { // ищем слайдер превью по селектору
	direction: 'horizontal', 
	slidesPerView: 1, 
	thumbs: { // указываем на превью слайдер
		swiper: sliderThumbs, // указываем имя превью слайдера
    slideToClickedSlide: true,
	},
  navigation: {
    nextEl: '.product-slider__btn-main--next',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

sliderThumbs.on('slideChange', function () {
  var activeIndex = sliderThumbs.activeIndex;
  sliderImages.slideTo(activeIndex);
});

sliderImages.on('slideChange', function () {
  var activeIndex = sliderImages.activeIndex;
  sliderThumbs.slideTo(activeIndex);
});


var cartItemContainer = document.querySelectorAll('.cart-item__heading');

cartItemContainer.forEach(function(container) {
  var cartItemtext = container.querySelector('.cart-item__title');
  
  if (cartItemtext.scrollWidth > container.clientWidth) {
    cartItemtext.classList.add('motion');
  } else {
    cartItemtext.classList.remove('motion');
  }
});

var goodsContainer = document.querySelectorAll('.goods-slider__heading');

goodsContainer.forEach(function(container) {
  var goodstext = container.querySelector('.goods-slider__title');
  
  if (goodstext.scrollWidth > container.clientWidth) {
    goodstext.classList.add('motu');
  } else {
    goodstext.classList.remove('motu');
  }
});

// COUNTER
const myInput = document.querySelector(".counter__input");

function stepper(btn){
    let id = btn.getAttribute("id");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = myInput.getAttribute("value");
    let calcStep = (id == "counter-increment") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcStep;

    if(newValue >= min && newValue <= max){
        myInput.setAttribute("value", newValue);
    }
}

//Open Menu
let btnOpenMenu = document.querySelector('.card__open-menu');

if(btnOpenMenu) {
  let menu = document.querySelector('.header__dropdown-wrapper');

  btnOpenMenu.addEventListener('click', () => {
    menu.classList.remove('hidden')
  })
  
  menu.addEventListener('mouseleave', () => {
    menu.classList.add('hidden')
  })
}

const openButtonOrder = document.querySelectorAll('.gallery__item-btn');
if(openButtonOrder) {
  const closePopupOrder = document.querySelector('.order-popup__close');
  const popupOrder = document.querySelector('.order-popup');

  openButtonOrder.forEach(function(button) {
    button.addEventListener('click', () => {
      popupOrder.classList.remove('hidden')
    });

    closePopupOrder.addEventListener('click', () => {
      popupOrder.classList.add('hidden')
    });
  });
}


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



// Gallery More tag
const buttonGalleryMoreTags = document.querySelector('.more-btn__tags');
let isExpandedTag = false;
if(buttonGalleryMoreTags) {
  const tagsGalleryMore = document.querySelector('.gallery__more-tags');
  
  buttonGalleryMoreTags.addEventListener('click', function() {
    if (!isExpandedTag) {
      tagsGalleryMore.classList.remove('hidden')
  
      buttonGalleryMoreTags.textContent = 'Скрыть';
      isExpandedTag = true;
    } else {
      tagsGalleryMore.classList.add('hidden')
  
      buttonGalleryMoreTags.textContent = 'Развернуть';
      isExpandedTag = false;
    }
  });
}

//Show promokod 
let gratitudeBtn = document.querySelector('.gratitude__btn');
let isExpandedBtn = false;
if(gratitudeBtn) {
  let gratitudeDesc = document.querySelector('.gratitude__desc');
  gratitudeBtn.addEventListener('click', () => {
    if(!isExpandedBtn) {
      gratitudeBtn.innerHTML = `<p class="text-red gratitude__close">Закрыть</p>`
      gratitudeDesc.innerHTML = `
      <div class='gratitude__subtitle'>Ваш промокод: </div>
      <div class="gratitude__promo">LAZERTECH54</div>
      `
      isExpandedBtn = true;
    } else {
      gratitudeBtn.innerHTML = `<img src="/images/gratitude/present.svg" alt="present"><p class="gratitude__text">Спасибо!</p>`
      gratitudeDesc.innerHTML = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br> tempor incididunt ut labore et<br> dolore magna aliqua.`
      isExpandedBtn = false;
    }
  })
}


const Questiontooltip = document.querySelector('.question-tooltip');
if(Questiontooltip) {
  const productQuestion = document.querySelectorAll('.product__question');

  productQuestion.forEach(question => {
    question.addEventListener('mousemove', function(e) {
      Questiontooltip.innerText = this.dataset.qustion;
      Questiontooltip.style.top = (e.y + 0) + 'px';
      Questiontooltip.style.left = (e.x + 20) + 'px';
    })
  
    question.addEventListener('mouseenter', () => {
      Questiontooltip.style.display = 'block';
    })
  
    question.addEventListener('mouseleave', () => {
      Questiontooltip.style.display = 'none'
    })
  })
}

const QuestiontooltipRed = document.querySelector('.question-tooltip--red');
if(QuestiontooltipRed) {
  const productQuestion = document.querySelectorAll('.product__question--red');

  productQuestion.forEach(question => {
    question.addEventListener('mousemove', function(e) {
      QuestiontooltipRed.innerText = this.dataset.qustion;
      QuestiontooltipRed.style.top = e.y + 'px';
      QuestiontooltipRed.style.left = e.x  + 'px';
    })
  
    question.addEventListener('mouseenter', () => {
      QuestiontooltipRed.style.display = 'block';
    })
  
    question.addEventListener('mouseleave', () => {
      QuestiontooltipRed.style.display = 'none'
    })
  })
}

const tooltipTime = document.querySelector('.tooltip--time');
if(tooltipTime) {
  const productTime = document.querySelectorAll('.product__time');

  productTime.forEach(question => {
    question.addEventListener('mousemove', function(e) {
      tooltipTime.innerText = this.dataset.qustion;
      tooltipTime.style.top = e.y + 'px';
      tooltipTime.style.left = e.x  + 'px';
    })
  
    question.addEventListener('mouseenter', () => {
      tooltipTime.style.display = 'block';
    })
  
    question.addEventListener('mouseleave', () => {
      tooltipTime.style.display = 'none'
    })
  })
}


// Fast Order PopUp
const openButtonRelations = document.querySelector('.product__order');
if(openButtonRelations) {
  const closePopupRelations = document.querySelector('.relations-popup__close');
  const popupRelations= document.querySelector('.relations-popup');

  openButtonRelations.addEventListener('click', function(e) {
    e.preventDefault();
    popupRelations.classList.remove('hidden');
  });
  
  closePopupRelations.addEventListener('click', function() {
    popupRelations.classList.add('hidden')
  });
}


const openButtonRelationsCustom = document.querySelector('.custom-form__order');
if(openButtonRelationsCustom) {
  const closePopupRelations = document.querySelector('.relations-popup__close');
  const popupRelations= document.querySelector('.relations-popup');

  openButtonRelationsCustom.addEventListener('click', function(e) {
    e.preventDefault();
    popupRelations.classList.remove('hidden');
  });
  
  closePopupRelations.addEventListener('click', function() {
    popupRelations.classList.add('hidden')
  });
}

// Promo Input Active
let cartTotalInput = document.querySelector('.cart-total__input');

if (cartTotalInput) {
  let enterBtn = document.querySelector('.cart-total__enter');

  cartTotalInput.addEventListener('input', () => {
    if (cartTotalInput.value != 0) {
      enterBtn.classList.add('promo-active');
    } else {
      enterBtn.classList.remove('promo-active');
    }
  });
}

const openButtonProduct = document.querySelectorAll('.cart-item__edit');
if(openButtonProduct) {
  const closeButtonProduct = document.querySelector('.cart-popup__close');
  const popupProduct = document.querySelector('.cart-popup');
  
  openButtonProduct.forEach(function(button) {
    button.addEventListener('click', () => {
      popupProduct.classList.remove('hidden')
    });
  
    closeButtonProduct.addEventListener('click', function() {
      popupProduct.classList.add('hidden')
    });
  });
}


// Product Read More
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

  buttonTagMore.addEventListener('click', function() {

    if (!isExpandedTag) {
      tagsMore.classList.remove('hidden')
      tagMoreBc.classList.add('hidden')
      buttonTagMore.textContent = 'Скрыть';
      isExpandedTag = true;
    } else {
      tagsMore.classList.add('hidden')
      tagMoreBc.classList.remove('hidden')

      buttonTagMore.textContent = 'Развернуть';
      isExpandedTag = false;
    }
  });
}














