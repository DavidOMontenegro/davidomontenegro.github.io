import { loadHTML } from './includes.js';
async function init() {
    const depth = (window.location.pathname.match(/\//g) || []).length - 1;
    const prefix = depth > 1 ? '../'.repeat(depth - 1) : './';
    await Promise.all([
        loadHTML('#header', `${prefix}components/header.html`),
        loadHTML('#footer', `${prefix}components/footer.html`),
    ]);
    if (document.head) {
        try {
            const res = await fetch(`${prefix}components/head.html`);
            if (res.ok) {
                const html = await res.text();
                document.head.insertAdjacentHTML('beforeend', html);
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    console.log('Common layout loaded.');
}
init();
