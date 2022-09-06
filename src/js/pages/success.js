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
initBeginCatalog();
