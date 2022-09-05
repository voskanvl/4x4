const initBeginCatalog = (time = 100) => {
    const bigButton = document.querySelector(".big-button");
    const match = matchMedia("(max-width: 425px)").matches;
    const opacity = getComputedStyle(
        document.querySelector(".catalog"),
    ).opacity;
    setTimeout(() => {
        console.log("match, opacity", match, opacity);
        if (match && opacity) bigButton.click();
    }, time);
};
export default initBeginCatalog;
