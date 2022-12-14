// Menu Burger
const burger = document.querySelector(".burger");
const burgerSpanTop = document.querySelector(".burger__span--top");
const burgerSpanBottom = document.querySelector(".burger__span--bottom");
const burgerPopup = document.querySelector(".burger__popup");

let header = document.querySelector(".header");
let headerHeight = header.offsetHeight;

let menuOpened = false;

function openBurger() {
  burgerSpanTop.style.transition = ".3s all";
  burgerSpanTop.style.transform = "rotate(45deg)";
  burgerSpanTop.style.top = "25px";

  burgerSpanBottom.style.transition = ".3s all";
  burgerSpanBottom.style.transform = "rotate(-45deg)";
  burgerSpanBottom.style.top = "25px";

  burgerPopup.style.display = "block";

  if (window.pageYOffset === 0) {
    burgerPopup.style.top = `${headerHeight}px`;
  }

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

burger.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  event.preventDefault();
  if (
    (menuOpened && event.target.classList.contains("burger")) ||
    event.target.classList.contains("burger__span") ||
    event.target.classList.contains("burger__list-close-img")
  ) {
    closeBurger();
  } else {
    openBurger();
  }
});

//Закрывать бургер меню по клику вне
// document.querySelector("body").addEventListener("click", (event) => {
//   if (menuOpened && !event.target.classList.contains(".burger__popup") && !event.target.classList.contains(".burger")) {
//     closeBurger();
//   }
// });

// Появление иконски закрытия меню при скролле
let menuPopupClose = document.querySelector(".burger__list-close");

window.addEventListener("scroll", () => {
  menuPopupClose.style.transition = "0.5s all";
  menuPopupClose.style.opacity = "100";
  menuPopupClose.style.cursor = "pointer";

  burgerPopup.style.top = "0";

  if (window.pageYOffset === 0) {
    menuPopupClose.style.opacity = "0";
    menuPopupClose.style.cursor = "default";
    burgerPopup.style.top = `${headerHeight}px`;
  }
});

// Slider on page (Разработка сайтов: проекты и отзывы)
const prevBtn = document.querySelector(".slider__btn--prev");
const nextBtn = document.querySelector(".slider__btn--next");

const sliderContent = document.querySelector(".slider__content");
const sliderWrapper = document.querySelector(".slider__item-wrapper");

let sliderContentWidth;
let sliderWrapperWidth;

if (sliderContent) {
  sliderContentWidth = sliderContent.clientWidth;
}
if (sliderWrapper) {
  sliderWrapperWidth = sliderWrapper.clientWidth;
}

let sliderStop = Math.ceil(sliderWrapperWidth / sliderContentWidth);

let sliderCount = 1;

if (sliderCount === 1 && prevBtn) {
  prevBtn.setAttribute("disabled", "disabled");
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    sliderCount--;
    nextBtn.removeAttribute("disabled");
    sliderWrapper.style.transition = ".4s all";
    sliderWrapper.style.transform += `translateX(${sliderContentWidth}px)`;

    console.log("sliderCount:", sliderCount);
    console.log("sliderStop:", sliderStop);

    if (sliderCount === 1 && prevBtn) {
      prevBtn.setAttribute("disabled", "disabled");
    }
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    sliderCount++;
    prevBtn.removeAttribute("disabled");
    sliderWrapper.style.transition = ".4s all";
    sliderWrapper.style.transform += `translateX(${-sliderContentWidth}px)`;

    console.log("sliderCount:", sliderCount);
    console.log("sliderStop:", sliderStop);

    console.log(sliderContentWidth);

    if (sliderCount == sliderStop && nextBtn) {
      nextBtn.setAttribute("disabled", "disabled");
    }
  });
}

// Панель навигации
let navigationBtn = document.querySelectorAll(".navigation__btn");

if (navigationBtn) {
  navigationBtn.forEach((btn, btnIndex) => {
    btn.addEventListener("click", () => {
      let navigationItem = btn.closest(".navigation__item");
      let navigationContent = navigationItem.querySelector(".navigation__item-content");
      let navigationList = navigationItem.querySelector(".navigation__item-list");

      let shift = navigationContent.offsetWidth + 20;

      navigationContent.style.transition = ".3s all";
      navigationList.style.transition = ".3s all";

      navigationContent.style.transform = `TranslateX(${-shift}px)`;
      navigationList.style.transform = `TranslateX(${-shift}px)`;
    });
  });
}

let navigationListClose = document.querySelectorAll(".navigation__item-list img");

if (navigationListClose) {
  navigationListClose.forEach((close) => {
    close.addEventListener("click", () => {
      let navigationItem = close.closest(".navigation__item");
      let navigationContent = navigationItem.querySelector(".navigation__item-content");
      let navigationList = navigationItem.querySelector(".navigation__item-list");

      navigationContent.style.transition = ".3s all";
      navigationList.style.transition = ".3s all";

      navigationContent.style.transform = `TranslateX(${0}px)`;
      navigationList.style.transform = `TranslateX(${0}px)`;
    });
  });
}

// Открыть панель навигации на планшете/ мобиле
let navigPanelBtn = document.querySelectorAll(".navigPanel__btn");

navigPanelBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// Раскрывать список в navigatePanel
let navigPanelItem = document.querySelectorAll(".navigPanel__item");
let navigatePanelBtn = document.querySelectorAll(".navigPanel__btn");

navigatePanelBtn.forEach((btn, btnIndex) => {
  btn.addEventListener("click", () => {
    navigPanelItem.forEach((item, itemIndex) => {
      if (itemIndex === btnIndex) {
        console.log(itemIndex);
        item.style.transition = "0.5s all";
        item.style.minHeight = "0";
        item.style.height = "auto";
      }
    });
  });
});

// Открыть панель навигации на внутренних страницах
let navigPanelInside = document.querySelector(".navigation__wrapper--inside");
let openPanel = document.querySelector(".openPanel__btn");

let openedPanel = false;

openPanel.addEventListener("click", () => {
  if (!openedPanel) {
    navigPanelInside.style.display = "block";
    openPanel.innerHTML = "закрыть";
    openedPanel = true;
  } else {
    navigPanelInside.style.display = "none";
    openPanel.textContent = "меню";
    openedPanel = false;
  }
});
