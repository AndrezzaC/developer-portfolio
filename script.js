const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");

    if(mainNav.classList.contains("active")){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

        menuToggle.classList.add("active");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        menuToggle.classList.remove("active");
    }


});