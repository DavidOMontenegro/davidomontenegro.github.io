var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loadHTML } from './includes.js';
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const depth = (window.location.pathname.match(/\//g) || []).length - 1;
        const prefix = depth > 1 ? '../'.repeat(depth - 1) : './';
        yield Promise.all([
            loadHTML('#header', `${prefix}components/header.html`),
            loadHTML('#footer', `${prefix}components/footer.html`),
        ]);
        if (document.head) {
            try {
                const res = yield fetch(`${prefix}components/head.html`);
                if (res.ok) {
                    const html = yield res.text();
                    document.head.insertAdjacentHTML('beforeend', html);
                }
            }
            catch (err) {
                console.error(err);
            }
        }
        console.log('Common layout loaded.');
    });
}
init();
