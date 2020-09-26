// function testWebP(callback) {
//    var webP = new Image();
//    webP.onload = webP.onerror = function () {
//       callback(webP.height == 2);
//    };
//    webP.src =
//       "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }

// testWebP(function (support) {
//    if (support == true) {
//       document.querySelector("body").classList.add("webp");
//    } 
// });

const cardsLink = document.querySelectorAll(".cards__link");
const cardsDisabled = document.querySelectorAll(".disabled");
const buyLink = document.querySelectorAll(".buy-link");


cardsLink.forEach((card) => {
   card.addEventListener('click', (e) => {
      if (card.classList.contains('disabled')) {
         return false;
      } else {
         //окрашивает элементы в розовый 
         card.lastElementChild.classList.toggle("card__check");
         card.querySelector(".card__weight").classList.toggle("card__check");

         //получение и сохранение изменяющегося текста
         const cardUpText = card.querySelector(".card__text");
         const cardUpTextHTML = cardUpText.textContent;

         //событие при выходе курсора за пределы элемента
         card.addEventListener('mouseout', (e) => {
            if (card.querySelector('.card__border').classList.contains('card__check')) {
               cardUpText.textContent = "Котэ не одобряет!";
               cardUpText.style.color = "#d91667";
            }
         });

         //событие при наведении, возвращение свойств
         card.addEventListener('mouseover', (e) => {
            const cardUpText = card.querySelector(".card__text");
            cardUpText.textContent = cardUpTextHTML;
            cardUpText.style.color = "#666666";
         });
      }
   });
});

//изменение текста под карточкой товара в случае его отсутствия
cardsDisabled.forEach((disabled) => {
   const cardDisabledText = disabled.nextElementSibling;
   const titleIngredient = disabled.querySelector(".card-title__ingredient");
   cardDisabledText.style.color = "#ffff66";
   cardDisabledText.textContent = "Печалька, " + titleIngredient.textContent + " закончился.";
});

//клик по кнопке "купи"
buyLink.forEach((link) => {
   link.addEventListener('click', (e) => {
      const bottomText = link.parentElement;
      const cardItem = bottomText.parentElement;
      const cardBorder = cardItem.querySelector(".card__border");
      cardBorder.classList.add("card__check");
      cardBorder.querySelector(".card__weight").classList.add("card__check");
   });
});