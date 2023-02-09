import { cardText } from "./modules/cardText.js"
import { email } from "./modules/email.js";
import { getYear } from "./modules/getYear.js"
import env from "./modules/env.js"
import { reveals } from "./modules/reveals.js";
import { controlForm } from "./modules/controlForm.js";
import { openCardLinks } from "./modules/openCardLinks.js";
import { formSupport } from "./modules/formSupport.js";
import { appear, hamburger } from "./header.js";

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
    openCardLinks(".card-subtitle *")
    openCardLinks(".card-icon");
    formSupport();
    appear();
    hamburger();
});
window.addEventListener("scroll", reveals);