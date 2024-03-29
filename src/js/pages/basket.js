import "../../styles/style.sass";
import "../bigButtonListener";
import "../modal";
import { counter } from "../counter";
import initBeginCatalog from "../initBeginCatalog";

// if (document.readyState === "loading") {
//     console.log('document.readyState === "loading"');
//     document.addEventListener("DOMContentLoaded", start);
// } else {
//     console.log('document.readyState !== "loading"');
//     start();
// }

const catalog = document.querySelector(".catalog");
const checkout = document.querySelector(".info-panel__checkout");
const modal = document.querySelector(".info-panel .modal");
const close = document.querySelector(".info-panel .modal__close");

//--- TOOGLE CATALOG__ITEM ---
const clickHandler = ({ target }) => {
    const subMenu = target
        .closest(".catalog__item")
        .querySelector(".sub-menu__content");
    if (subMenu) {
        subMenu.classList.toggle("sub-menu__content_show");
    }
};
catalog.addEventListener("click", clickHandler);
//--- CLICK BigBUTTON
// document.querySelector(".big-button").click();
//--- OPEN MODAL
checkout.addEventListener("click", () => (modal.style.display = "flex"));
close.addEventListener("click", () => (modal.style.display = "none"));
//--- controls modal handler
const controls = document.querySelectorAll(
    ".checkout-panel__controls > button",
);
const routes = {
    "checkout-panel__nonelogin": "/basket.html",
    "checkout-panel__login": "/registration.html",
};
controls.forEach(control =>
    control.addEventListener(
        "click",
        () => (window.location.href = routes[control.id]),
    ),
);
counter();
initBeginCatalog();
