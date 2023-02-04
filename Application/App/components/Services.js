import { ajaxHelper } from "../helpers/ajaxHelper.js"
import { language } from "../helpers/language.js";
export function Services() { 
    document.querySelector("head").innerHTML += '<link rel="stylesheet" href="./App/assets/styles/services.css"><link rel="stylesheet" href="./App/assets/styles/reveal.css">'
    ajaxHelper({
        URL: "../../App/assets/views/" + language({get:true}) + "/services.html",
        headers: {
            'Content-Type':'text/html'
        },
        success: (givenHtml) => {
            document.querySelector("body").innerHTML += givenHtml;
            if (language({get:true}) == "en") {
                document.title = "I want to make your webpage"
            } else {
                document.title = "Quiero hacer tu página web"
            }
        },
        error: (err) => {
            document.write(err);
        }
    });
    setTimeout(() => { 
        const $jsTag = document.createElement("script");
        $jsTag.type = "module";
        $jsTag.src = "./App/assets/scripts/services.js";
        document.body.appendChild($jsTag);
    }, 1000);
}