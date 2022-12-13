import { cardText } from "./modules/cardText.js"
import { email } from "./modules/email.js";
import { getYear } from "./modules/getYear.js"
import env from "../../helpers/env.js"

document.addEventListener("DOMContentLoaded", () => {
    cardText();
    getYear();
    email(env.email);
})