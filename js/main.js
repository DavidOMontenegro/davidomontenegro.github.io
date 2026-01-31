import { displayFlag, loadHTML } from './includes.js';
async function init() {
    await Promise.all([
        loadHTML('#header', `/components/header.html`),
        loadHTML('#footer', `/components/footer.html`)
    ]);
    document.addEventListener("DOMContentLoaded", displayFlag);
    let button = document.querySelector('#lang');
    if (!button) {
        console.error(`init: Localization button not found.`);
        return;
    }
    button.addEventListener("onClick", changeLanguage);
}
function changeLanguage() {
    let href = window.location.href;
    if (href.includes("/en/")) {
        href.replace("/en/", "/pt/");
    }
    else {
        href.replace("/pt/", "/en/");
    }
    window.location.replace(href);
}
init();
