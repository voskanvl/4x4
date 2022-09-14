const [leftSwitch, rightSwitch] = document.querySelectorAll(
    ".category__form-right > svg",
);
const categoryItems = document.querySelector(".category__items");

const changeColor = (left, right) => {
    [...leftSwitch.children].forEach(e => e.setAttribute("fill", left));
    [...rightSwitch.children].forEach(e => e.setAttribute("fill", right));
};

leftSwitch &&
    leftSwitch.addEventListener("click", () => {
        categoryItems.removeAttribute("mode");
        changeColor("#FAAC3D", "#E5ECF3");
    });
rightSwitch &&
    rightSwitch.addEventListener("click", () => {
        categoryItems.setAttribute("mode", "list");
        changeColor("#E5ECF3", "#FAAC3D");
    });
