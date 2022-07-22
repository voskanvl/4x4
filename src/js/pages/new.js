import "../../styles/style.sass";
import "../bigButtonListener";
import "../modal";
// if (document.readyState === "loading") {
//     console.log('document.readyState === "loading"');
//     document.addEventListener("DOMContentLoaded", start);
// } else {
//     console.log('document.readyState !== "loading"');
//     start();
// }
window.onload = start;
function start() {
    //--- CLICK BigBUTTON
    document.querySelector(".big-button").click();
}
