import { cardText } from "./modules/cardText.js"
import { email } from "./modules/email.js";
import { getYear } from "./modules/getYear.js"
import env from "../../helpers/env.js"
import { reveals } from "./modules/reveals.js";
import { controlForm } from "./modules/controlForm.js";
import { openCardLinks } from "./modules/openCardLinks.js";
import { formSupport } from "./modules/formSupport.js";

document.addEventListener("DOMContentLoaded", () => {
    cardText();
    getYear();
    email(env.email);
    reveals();
    controlForm("form", 'form input[type="checkbox"]');
    openCardLinks(".card-content");
    openCardLinks(".card");
    openCardLinks(".card-title");
    openCardLinks(".card-subtitle");
    openCardLinks(".card-icon");
    formSupport();
});
window.addEventListener("scroll", reveals);