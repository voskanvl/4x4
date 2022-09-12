import "../../styles/style.sass";
import "../bigButtonListener";
import "../modal";
import initBeginCatalog from "../initBeginCatalog";

//--PAYMENT

const paymethdCheck = document.querySelector(".paymethod .checkbox");
paymethdCheck.parentElement.addEventListener("click", () => {
    let { display } = paymethdCheck.style;
    console.log("🚀 ~ display", display);
    if (display === "none") {
        paymethdCheck.style.display = "block";
    } else {
        paymethdCheck.style.display = "none";
    }
});
initBeginCatalog();
