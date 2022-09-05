import "../../styles/style.sass";
import "../bigButtonListener";
import "../modal";
import initBeginCatalog from "../initBeginCatalog";
// if (document.readyState === "loading") {
//     console.log('document.readyState === "loading"');
//     document.addEventListener("DOMContentLoaded", start);
// } else {
//     console.log('document.readyState !== "loading"');
//     start();
// }

//--- CLICK BigBUTTON
const bigButton = document.querySelector(".big-button");
const catalog = document.querySelector(".account__menu .catalog");
bigButton.click();
bigButton.addEventListener("click", () => (window.location = "/"));
//--- TOOGLE CATALOG__ITEM ---
catalog.addEventListener("click", ({ target }) => {
    const subMenu = target
        .closest(".catalog__item")
        .querySelector(".sub-menu__content");
    console.log("🚀 ~ subMenu", subMenu);
    if (subMenu) {
        subMenu.classList.toggle("sub-menu__content_show");
    }
});

initBeginCatalog();
