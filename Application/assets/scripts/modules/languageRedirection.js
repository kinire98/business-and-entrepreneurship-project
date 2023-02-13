export default function languageRedirection() {
    const ls = localStorage;
    ls.setItem("language", "es")
    if (!ls.getItem("language") || ls.getItem("language") == "es") {
        ls.setItem("language", "es");
        generateButton("es")
        // open("./es", "_parent")
    }
    if(ls.getItem("language") == "en") {
        open("./en", "_parent");
    }
}
function generateButton(lan) {
    const $button = document.createElement("a");
    $button.href = "./" + lan;
    $button.style.display = "none";
    document.body.appendChild($button);
    $button.click();
}