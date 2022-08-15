// Menu Burger
const burger = document.querySelector(".burger");
const burgerSpanTop = document.querySelector(".burger__span--top");
const burgerSpanBottom = document.querySelector(".burger__span--bottom");
const burgerPopup = document.querySelector(".burger__popup");

let menuOpened = false;

function openBurger() {
  burgerSpanTop.style.transition = ".3s all";
  burgerSpanTop.style.transform = "rotate(45deg)";
  burgerSpanTop.style.top = "25px";

  burgerSpanBottom.style.transition = ".3s all";
  burgerSpanBottom.style.transform = "rotate(-45deg)";
  burgerSpanBottom.style.top = "25px";

  burgerPopup.style.display = "block";

  menuOpened = true;
}

function closeBurger() {
  burgerSpanTop.style.transform = "rotate(0deg)";
  burgerSpanTop.style.top = "20px";

  burgerSpanBottom.style.transform = "rotate(0deg)";
  burgerSpanBottom.style.top = "30px";

  burgerPopup.style.display = "none";

  menuOpened = false;
}

burger.addEventListener("click", () => {
  if (menuOpened) {
    closeBurger();
  } else {
    openBurger();
  }
});

//Закрывать бургер меню по клику вне
document.querySelector("body").addEventListener("click", (event) => {
  if (menuOpened && !event.target.classList.contains("burger__popup") && !event.target.classList.contains("burger")) {
    closeBurger();
  }
});
