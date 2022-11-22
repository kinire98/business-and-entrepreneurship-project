


export function addRemoveClassOnHover (element, otherElement) {
    const el = document.querySelector(element);

    document.querySelector(otherElement).addEventListener("mouseover", () => {
        el.classList.add("hover");
    })
    document.querySelector(otherElement).addEventListener("mouseleave", () => {
        el.classList.remove("hover");
    })
}