//Переменные
const menuButton = document.querySelector('.header__button');
const menu = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.header__links-container');
const images = document.querySelectorAll(".gallery-wrapper");
const popup = document.querySelector(".popup");
const popupImg = popup.querySelector(".popup-image");
const closeButton = document.createElement("button");
const imageSources = [];
const earlierInfo = document.querySelector('.year');
const showMoreButton = document.querySelector('.about__show-more');
let isExpanded = false;
const items = document.querySelectorAll('.footer__faq-item');
let currentIndex = 0;
let scrollToTopBtn = document.querySelector('.scroll-to-top');


//Функция закрытия попапа
function closePopup(e) {
  if (e.type === "click" || e.key === "Escape") {
    popup.removeEventListener("click", closePopup);
    document.removeEventListener("keydown", closePopup);
    popup.style.display = "none";
  }
}

//Слушатели событий
//Открытие попапа с текущим изображением
images.forEach(image => {
  image.addEventListener("click", e => {
    e.preventDefault();
    currentIndex = imageSources.indexOf(e.target.src);
    popupImg.src = e.target.src;
    popup.style.display = "block";
    popup.addEventListener("click", closePopup);
    document.addEventListener("keydown", closePopup);
  });
});

//Слушатель кнопки смотреть далее
showMoreButton.addEventListener('click', function () {
  if (isExpanded) {
    showMoreButton.textContent = 'Смотреть далее';
  } else {
    showMoreButton.textContent = 'Свернуть';
  }
  earlierInfo.classList.toggle('year_hidden');
  isExpanded = !isExpanded;
});

//Слушатели меню
menuButton.addEventListener('click', () => {
  menu.classList.toggle('header__menu_active');
  menuButton.classList.toggle('header__button_active');
})
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.toggle('header__menu_active');
    menuButton.classList.toggle('header__button_active');
  })
});

//Слушатель для скролла и появления кнопки вверх
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//Открытие аккордиона
items.forEach(item => {
  const question = item.querySelector('.footer__faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
    const answer = item.querySelector('.footer__faq-answer');
    answer.classList.toggle('footer__faq-answer--visible');
  });
});