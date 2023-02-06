const d = document;

export function openCardLinks(cardSelector, cardContent) {
    d.addEventListener("click", (e) => {
        if (!e.target.matches(cardSelector)) {return null;}
        open(e.target.dataset.href, "_blank")
    });
}