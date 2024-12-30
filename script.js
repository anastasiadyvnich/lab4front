//(85 mod 10) + 1 = 6

window.addEventListener("DOMContentLoaded", (event) => {
    var demo = document.getElementById("demo");
    var nextElem = document.querySelector(".next");

    function changeColor(elem) {
    // Зміна кольору тла та тексту елемента
        elem.classList.toggle("color");
    }

    // Прив'язуємо обробники подій із передачею елемента
    demo.onclick = function() {
        changeColor(demo);
    };

    nextElem.onclick = function() {
        changeColor(nextElem);
    };
});
