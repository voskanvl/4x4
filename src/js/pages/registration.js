import "../../styles/style.sass";
import "../bigButtonListener";
import "../modal";
import initBeginCatalog from "../initBeginCatalog";

const paymethdCheck = document.querySelector(".paymethod .checkbox");
//--- CLICK BigBUTTON
// document.querySelector(".big-button").click();
const form = document.querySelector("form.registration__form");
form.addEventListener("click", ({ target }) => {
    if (target.tagName === "INPUT") {
        const untouched = target.getAttribute("untouched");
        if (untouched) {
            target.removeAttribute("untouched");
        }
    }
});
initBeginCatalog();
