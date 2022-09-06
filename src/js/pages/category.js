import "../../styles/style.sass";
import "../../components/range/range";
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
//--- TOOGLE CATALOG__ITEM ---
catalog.addEventListener("click", ({ target }) => {
    const subMenu = target
        .closest(".catalog__item")
        .querySelector(".sub-menu__content");
    if (subMenu) {
        subMenu.classList.toggle("sub-menu__content_show");
    }
});
//--- CLICK BigBUTTON
// document.querySelector(".big-button").click();
//--- COUNTERS ---
counter();

initBeginCatalog();
