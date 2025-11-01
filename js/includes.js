var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function loadHTML(selector, filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`loadHTML: No element found for selector ${selector}.`);
            return;
        }
        try {
            const response = yield fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath} (${response.status})`);
            }
            element.innerHTML = yield response.text();
        }
        catch (err) {
            console.error(err);
        }
    });
}
