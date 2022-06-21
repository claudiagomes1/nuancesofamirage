/* custom cursor */
const cursor = document.querySelector("#cursor"),
    anchor = document.querySelectorAll("a");

window.addEventListener("mousemove", (e) => {
    let x = e.pageX,
      y = e.pageY;
  
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

isTouchDevice = () => {
    return ( 'ontouchstart' in window ) ||
      ( cursor.style.left > 0 ) ||
      ( cursor.style.top > 0 );
  };

/* anchor tag */
anchor.forEach ((anc) =>{
    anc.addEventListener("mouseover", () =>{
        cursor.style.transform = "scale(3)";
        cursor.style.animationName = "borderAnim";
    });
    anc.addEventListener("mouseleave", () =>{
        cursor.style.transform = "";
        cursor.style.animationName = "";
    });
});

/* distort content */
const content = document.querySelector("section");
let currentPos = window.pageYOffset;

const callDistort = function(){
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.05;

    content.style.transform = "skewY(" + speed + "deg)";
    currentPos = newPos;
    requestAnimationFrame(callDistort);
};

callDistort();

/* slider */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active"
}