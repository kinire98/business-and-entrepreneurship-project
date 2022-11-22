import { addRemoveClassOnHover } from "./modules/addRemoveClassOnHover.js";
import { getYear } from "./modules/getYear.js";



document.addEventListener("DOMContentLoaded", () => {
    getYear();
    addRemoveClassOnHover(".you", 'img[alt="A relaxed man"]')
})