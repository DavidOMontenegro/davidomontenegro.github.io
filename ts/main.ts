import { displayFlag, loadHTML } from './includes.js';

async function init() {

  let href = window.location.href;

  await Promise.all([
    loadHTML('#header', href.includes("/en/") ? `/components/header.html` : `/components/header-pt.html`),
    loadHTML('#footer', `/components/footer.html`)
  ]);

  let button = document.querySelector<HTMLElement>('#lang');
  if (!button) {
    console.error(`init: Localization button not found.`);
    return;
  }
  button.addEventListener("click", () => changeLanguage(href));

  displayFlag();
}

function changeLanguage(href: string) {

  if (href.includes("/en/")) {
    href = href.replace("/en/", "/pt/");
  } else {
    href = href.replace("/pt/", "/en/");
  }

  window.location.replace(href);

}

init();