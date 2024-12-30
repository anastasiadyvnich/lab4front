//(85 mod 10) + 1 = 6

window.addEventListener("DOMContentLoaded", (event) => {
    var demo = document.getElementById("demo");
    var nextElem = document.querySelector(".next");

    function changeColor(elem) {
    // Зміна кольору тла та тексту елемента
        elem.classList.toggle("color");
        // elem.style.backgroundColor = elem.style.backgroundColor === 'red' ? 'blue': 'red';
        // elem.style.color = elem.style.backgroundColor === 'red' ? 'white' : 'black';
    }

    // Прив'язуємо обробники подій із передачею елемента
    demo.onclick = function() {
        changeColor(demo);
    };

    nextElem.onclick = function() {
        changeColor(nextElem);
    };
});
