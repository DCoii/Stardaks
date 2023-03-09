const dropDown = document.querySelectorAll(".links__item h4");
dropDown.forEach((dropDowns) => {
    dropDowns.addEventListener("click", () => {
        dropDowns.nextElementSibling.classList.toggle("open");
        dropDowns.querySelector("i").classList.toggle("open");
    })
})