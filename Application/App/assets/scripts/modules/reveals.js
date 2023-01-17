export function reveals() {
  let reveals = document.querySelectorAll(".reveal");
  for (const element of reveals) {
    let windowHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;
    let elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  }
}