import { appear, hamburger } from "./header.js";
import { getYear } from "./modules/getYear.js"
import { reveals } from "./modules/reveals.js"


document.addEventListener("DOMContentLoaded", () => {
    getYear();
    reveals();
    appear();
    hamburger();
})
window.addEventListener("scroll", reveals)