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
    //--- CLICK BigBUTTON
    const bigButton = document.querySelector(".big-button");
    bigButton.click();
    bigButton.addEventListener("click", () => (window.location = "/"));
}
