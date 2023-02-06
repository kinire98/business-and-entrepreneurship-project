export function appear() {
    window.addEventListener("scroll", (e) => {
        if (window.scrollY <= 150) {document.querySelector("header").classList.remove("active")}
        if (window.scrollY > 150) {document.querySelector("header").classList.add("active")}
    })
}