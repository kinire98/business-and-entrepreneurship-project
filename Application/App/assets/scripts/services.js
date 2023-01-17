import { addRemoveClassOnHover } from "./modules/addRemoveClassOnHover.js";
import { getYear } from "./modules/getYear.js";
import { reveals } from "./modules/reveals.js";



document.addEventListener("DOMContentLoaded", () => {
    getYear();
    addRemoveClassOnHover(".you", 'img[alt="A relaxed man"]', "hover", "hover");
    reveals();
})
window.addEventListener("scroll", reveals)