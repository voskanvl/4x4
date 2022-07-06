import "../../styles/style.sass";
import "../bigButtonListener";
import "../modal";
if (document.readyState === "loading") {
    console.log('document.readyState === "loading"');
    document.addEventListener("DOMContentLoaded", start);
} else {
    console.log('document.readyState !== "loading"');
    start();
}
function start() {
    const paymethdCheck = document.querySelector(".paymethod .checkbox");
    //--- CLICK BigBUTTON
    document.querySelector(".big-button").click();
    const form = document.querySelector("form.registration__form");
    form.addEventListener("click", ({ target }) => {
        if (target.tagName === "INPUT") {
            const untouched = target.getAttribute("untouched");
            if (untouched) {
                target.removeAttribute("untouched");
            }
        }
    });
}
