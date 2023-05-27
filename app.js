// Responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active"); // change l'état du bouton qui passe en active
    navigation.classList.toggle("active");
});

// Video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");


var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active"); //change l'état du bouton après click du suivant
    });

    slides.forEach((slide) => {
        slide.classList.remove("active"); //change l'état du bouton après click du suivant
    });

    contents.forEach((content) => {
        content.classList.remove("active"); //change l'état du bouton après click du suivant
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
})