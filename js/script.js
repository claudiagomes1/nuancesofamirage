/* custom cursor */
const cursor = document.querySelector("#cursor"),
    anchor = document.querySelectorAll("a");

window.addEventListener("mousemove", (e) => {
    let x = e.pageX,
      y = e.pageY;
  
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

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
    const speed = diff * 0.10;

    content.style.transform = "skewY(" + speed + "deg)";
    currentPos = newPos;
    requestAnimationFrame(callDistort);
};

callDistort();
