const dropDown = document.querySelectorAll(".links__item h4");
dropDown.forEach((dropDowns) => {
    dropDowns.addEventListener("click", () => {
        dropDowns.nextElementSibling.classList.toggle("open");
        dropDowns.querySelector("i").classList.toggle("open");
    })
})

const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__content");
const kamote = document.querySelector(".kamote")
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  kamote.classList.toggle("overlay");
})

const starNav = document.querySelectorAll(".star__nav__link");
const starContent = document.querySelectorAll('.coffee-tab__content');

starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent= document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  })
})

function removeActiveStar (){
  starNav.forEach((star) => {
    star.classList.remove("active");
  })
}

function removeActiveContent (){
  starContent.forEach((star) => {
    star.classList.remove("active");
  })
}

