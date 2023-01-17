import { getYear } from "./modules/getYear.js"
import { reveals } from "./modules/reveals.js";

document.addEventListener("DOMContentLoaded", () => {
    getYear();
    reveals()
})
window.addEventListener("scroll", reveals)