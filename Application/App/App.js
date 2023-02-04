import { Home } from "./components/Home.js";
import { LanguageIcons } from "./components/LanguageIcons.js";
import { NavBar } from "./components/NavBar.js";
import { Router } from "./components/Router.js";
import { Services } from "./components/Services.js";
import { language } from "./helpers/language.js";


export default function App () {
    if (!language({get:true})) {language({set:true, language:"en", reload:false})}
    document.body.innerHTML = "";
    document.head.innerHTML = `<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../../../App/assets/img/mainLogo.png">
    <link rel="stylesheet" href="./App/assets/styles/style.css">
    <link rel="stylesheet" href="./App/assets/fontawesome/css/pro.min.css">`;
    NavBar();
    LanguageIcons();
    Router();
    Services()
}