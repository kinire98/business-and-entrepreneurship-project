import { glowCards } from "./modules/glowCards.js"
import { getYear } from "./modules/getYear.js"
import { cardText } from "./modules/cardText.js"
import { openLink } from "./modules/openLink.js";
import env from "../../helpers/env.js";


document.addEventListener("DOMContentLoaded", () => {
    glowCards();
    getYear();
    cardText();
    openLink(env.github_page, ".card-icon");
})