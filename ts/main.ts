import { loadHTML } from './includes.js';

async function init() {

  await Promise.all([
    loadHTML('#header', `/components/header.html`),
    loadHTML('#footer', `/components/footer.html`),
  ]);

  if (document.head) {
    try {
      const res = await fetch(`/components/head.html`);
      if (res.ok) {
        const html = await res.text();
        document.head.insertAdjacentHTML('beforeend', html);
      }
    } catch (err) {
      console.error(err);
    }
  }

  console.log('Common layout loaded.');
}

init();