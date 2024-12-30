//(85 mod 10) + 1 = 6

window.addEventListener("DOMContentLoaded", (event) => {
    const demo = document.getElementById("demo");
    const nextElem = document.querySelector(".next");

    function toggleClasses(elem) {
        
        if (elem.classList.contains("active")) {
            
            elem.classList.remove("active");
            elem.classList.add("inactive");
        } else {
            
            elem.classList.remove("inactive");
            elem.classList.add("active");
        }
    }

    demo.addEventListener("click", () => {
        toggleClasses(demo);
    });

    nextElem.addEventListener("click", () => {
        toggleClasses(nextElem);
    });
});
