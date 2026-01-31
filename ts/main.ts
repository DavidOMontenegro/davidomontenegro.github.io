import { displayFlag, loadHTML } from './includes.js';

async function init() {

  await Promise.all([
    loadHTML('#header', `/components/header.html`),
    loadHTML('#footer', `/components/footer.html`)
  ]);

  let button = document.querySelector<HTMLElement>('#lang');
  if (!button) {
    console.error(`init: Localization button not found.`);
    return;
  }
  button.addEventListener("click", changeLanguage);

  displayFlag();
}

function changeLanguage() {

  let href = window.location.href;

  if (href.includes("/en/")) {
    href = href.replace("/en/", "/pt/");
  } else {
    href = href.replace("/pt/", "/en/");
  }

  window.location.replace(href);

}

init();