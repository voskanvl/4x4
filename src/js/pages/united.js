// import "./about";
// import "./account";
// import "./basket";
// import "./category";
// import "./checkout";
// import "./index";
// import "./new";
// import "./news";
// import "./product";
// import "./registration";
// import "./success";

import "../bigButtonListener";
import "../modal";
import { counter } from "../counter";
import initBeginCatalog from "../initBeginCatalog";
import "../switchTabs";
import Splide from "@splidejs/splide";

//--- ON LOAD

// window.onload = start;

start();
function start() {
    setTimeout(() => {
        const catalog = document.querySelector(".catalog");
        const restoreHeight = () => {
            if (!carouselTop && !carouselNews) return;
            carouselTop.style.height = "";
            // carouselNovelty.style.height = "";
            carouselNews.style.height = "";
        };
        const carouselTop = document.querySelector(".carousel-top");
        const carouselNovelty = document.querySelector(".carousel-novelty");
        const carouselNews = document.querySelector(".carousel-news");

        const checkout = document.querySelector(".info-panel__checkout");
        const modal = document.querySelector(".info-panel .modal");
        const close = document.querySelector(".info-panel .modal__close");

        const carouselTopCarousel =
            carouselTop &&
            M.Carousel.init(carouselTop, {
                indicators: false,
                numVisible: 3,
                padding: 41,
                fullWidth: true,
            });
        const carouselNoveltyCarousel =
            carouselNovelty &&
            M.Carousel.init(carouselNovelty, {
                indicators: true,
                numVisible: 1,
                padding: 420,
                fullWidth: true,
            });
        const carouselNewsCarousel =
            carouselNews &&
            M.Carousel.init(carouselNews, {
                indicators: false,
                numVisible: 3,
                padding: 227,
                fullWidth: true,
            });
        restoreHeight();
        window.addEventListener("resize", () => setTimeout(restoreHeight, 200));

        //--- обработчики листания каруселей
        //--- для TOP
        const topPrev = document.querySelector(
            '.slider-top button[data-slide="prev"',
        );
        const topNext = document.querySelector(
            '.slider-top button[data-slide="next"',
        );
        if (topNext) topNext.onclick = () => carouselTopCarousel.next();
        if (topPrev) topPrev.onclick = () => carouselTopCarousel.prev();
        //--- для News
        const newsPrev = document.querySelector(
            '.slider-news button[data-slide="prev"',
        );
        const newsNext = document.querySelector(
            '.slider-news button[data-slide="next"',
        );
        if (newsNext) newsNext.onclick = () => carouselNewsCarousel.next();
        if (newsPrev) newsPrev.onclick = () => carouselNewsCarousel.prev();
        //--- TOOGLE CATALOG__ITEM ---
        catalog.addEventListener("click", ({ target }) => {
            const subMenu = target
                .closest(".catalog__item")
                .querySelector(".sub-menu__content");
            if (subMenu) {
                subMenu.classList.toggle("sub-menu__content_show");
            }
        });
        const catalogAcc = document.querySelector(".account__menu .catalog");
        //--- TOOGLE CATALOG__ITEM ---
        catalogAcc &&
            catalogAcc.addEventListener("click", ({ target }) => {
                const subMenu = target
                    .closest(".catalog__item")
                    .querySelector(".sub-menu__content");
                console.log("🚀 ~ subMenu", subMenu);
                if (subMenu) {
                    subMenu.classList.toggle("sub-menu__content_show");
                }
            });

        //--- mail subscribe
        const inp = document.querySelector(".footer-header__input");
        const submit = document.querySelector(".footer-header__submit");
        const form = document.querySelector(".footer-header__form");

        submit.addEventListener("click", e => {
            e.preventDefault();
            if (!form.checkValidity()) return inp.reportValidity();
            fetch("/mail.php", {
                method: "POST",
                body: new FormData(form),
            }).then(r => {
                if (r.ok) inp.value = "";
            });
        });
        //--- OPEN MODAL
        checkout &&
            checkout.addEventListener(
                "click",
                () => (modal.style.display = "flex"),
            );
        close &&
            close.addEventListener(
                "click",
                () => (modal.style.display = "none"),
            );
        //--- controls modal handler
        const controls = document.querySelectorAll(
            ".checkout-panel__controls > button",
        );
        const routes = {
            "checkout-panel__nonelogin": "/basket.html",
            "checkout-panel__login": "/registration.html",
        };
        controls &&
            controls.forEach(control =>
                control.addEventListener(
                    "click",
                    () => (window.location.href = routes[control.id]),
                ),
            );
        //--PAYMENT
        const paymethdCheck = document.querySelector(".paymethod .checkbox");
        paymethdCheck &&
            paymethdCheck.parentElement.addEventListener("click", () => {
                let { display } = paymethdCheck.style;
                console.log("🚀 ~ display", display);
                if (display === "none") {
                    paymethdCheck.style.display = "block";
                } else {
                    paymethdCheck.style.display = "none";
                }
            });
        //--- INIT CAROUSEL
        var main = new Splide("#main-slider", {
            type: "fade",
            heightRatio: 0.5,
            pagination: false,
            arrows: false,
            cover: true,
            // width: 400,
            height: 400,
        });

        var thumbnails = new Splide("#thumbnail-slider", {
            direction: "ttb",
            perPage: 3,
            height: 400,
            rewind: true,
            fixedWidth: 135,
            isNavigation: true,
            gap: 10,
            focus: "center",
            pagination: false,
            cover: true,
            dragMinThreshold: {
                mouse: 4,
                touch: 10,
            },
            breakpoints: {
                640: {
                    fixedWidth: 66,
                    fixedHeight: 38,
                },
            },
        });

        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
        window.splide = { main, thumbnails };
        //---registration
        const formRegistation = document.querySelector(
            "form.registration__form",
        );
        formRegistation.addEventListener("click", ({ target }) => {
            if (target.tagName === "INPUT") {
                const untouched = target.getAttribute("untouched");
                if (untouched) {
                    target.removeAttribute("untouched");
                }
            }
        });
    }, 0);
    counter();

    //--- начальная установка отображения каталога
    //--- по умолчанию должен быть выключен
    initBeginCatalog();
}
