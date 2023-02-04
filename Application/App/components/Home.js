import { ajaxHelper } from "../helpers/ajaxHelper.js";
import { language } from "../helpers/language.js";


export function Home() {
    document.querySelector("head").innerHTML += '<link rel="stylesheet" href="./App/assets/styles/home.css">'
    ajaxHelper({
        URL: "../App/assets/views/" + language({get:true})  +"/home.html",
        headers: {
            'Content-Type': 'text/html'
        },
        success: (givenHtml) => {
            document.getElementById("root").innerHTML += givenHtml;
            if (language({get:true}) == "en") {
                document.title = "Hi! 👋"
            } else {
                document.title = "¡Hola! 👋"
            }
        },
        error: (err) => {
            document.write(err)
        }
    });
}