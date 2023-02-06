import { getYear } from "./modules/getYear.js"
import { cardText } from "./modules/cardText.js"
import { openLink } from "./modules/openLink.js";
import { reveals } from "./modules/reveals.js"
import env from "../../helpers/env.js";


document.addEventListener("DOMContentLoaded", () => {
    getYear();
    cardText();
    openLink(env.github_page, ".card-icon");
    reveals();
})
window.addEventListener("scroll", reveals)