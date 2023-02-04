import { ajaxHelper } from "../helpers/ajaxHelper.js"
import { language } from "../helpers/language.js";
export function NavBar() { 
    document.querySelector("head").innerHTML += '<link rel="stylesheet" href="./App/assets/styles/navbar.css"><link rel="stylesheet" href="./App/assets/styles/hamburgers.min.css">'
    ajaxHelper({
        URL: "../../App/assets/views/" + language({get:true}) + "/navbar.html",
        headers: {
            'Content-Type':'text/html'
        },
        success: (givenHtml) => {
            document.querySelector("body").innerHTML += givenHtml;
        },
        error: (err) => {
            document.write(err);
        }
    });
    setTimeout(() => { 
        const $jsTag = document.createElement("script")
        $jsTag.src = "./App/assets/scripts/navBar.js"
        document.body.appendChild($jsTag)
    }, 1000);
}