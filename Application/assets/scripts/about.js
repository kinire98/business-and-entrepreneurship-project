import { appear, hamburger } from "./header.js";
import { getYear } from "./modules/getYear.js"
import { positionRemoveClass } from "./modules/positionRemoveClass.js";
import { reveals } from "./modules/reveals.js"


document.addEventListener("DOMContentLoaded", () => {
    getYear();
    reveals();
    appear();
    hamburger();
    positionRemoveClass(document.getElementById("points"), 1000, 0);
    positionRemoveClass(document.getElementById("back"), 1000, 0);
    positionRemoveClass(document.querySelector("#values > .dots"), Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ), 1500);
    positionRemoveClass(document.querySelector("#values > .back"), Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ), 1500);
});
window.addEventListener("scroll", () => {
    reveals()
    positionRemoveClass(document.getElementById("points"), 1000, 0);
    positionRemoveClass(document.getElementById("back"), 1000, 0);
    positionRemoveClass(document.querySelector("#values > .dots"), Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ), 1500);
    positionRemoveClass(document.querySelector("#values > .back"), Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ), 1500);


});