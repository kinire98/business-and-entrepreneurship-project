if (list) {
    var list = document.querySelectorAll("li.list")
} else {
    list = document.querySelectorAll("li.list")
}

console.log(list)
    list.forEach(el => {
        el.className = "list"
    })

    switch (location.hash) {
        case "#/": 
            list[0].className ="list active";
            document.querySelector("aside").style.background = list[0].dataset.color;
            break;
        case "#/Services":
            list[1].className ="list active";
            document.querySelector("aside").style.background = list[1].dataset.color;
            break;
        case "#/Bronze":
            list[2].className ="list active";
            document.querySelector("aside").style.background = list[2].dataset.color;
            break;
        case "#/Silver":
            list[3].className ="list active";
            document.querySelector("aside").style.background = list[3].dataset.color;
            break;
        case "#/Gold":
            list[4].className ="list active";
            document.querySelector("aside").style.background = list[4].dataset.color;
            break;
        case "#/About":
            list[5].className ="list active";
            document.querySelector("aside").style.background = list[5].dataset.color;
            break;
        case "#/Contact":
            list[6].className ="list active";
            document.querySelector("aside").style.background = list[6].dataset.color;
            break;
        case "#/Compromise":
            list[7].className ="list active";
            document.querySelector("aside").style.background = list[7].dataset.color;
            break;
        default:
            list[0].className ="list active";
            document.querySelector("aside").style.background = list[0].dataset.color;
            break;
    }
    
    for (const element of list) {
        element.onclick = () => {
            let j = 0;
            while (j < list.length) {
                list[j++].className = "list"
            }
            element.className ="list active";
        }
    }
    list.forEach(el => {
        el.addEventListener("click", (e) => {
            document.querySelector("aside").style.background = el.dataset.color;
        })
    })
    document.querySelector(".hamburger").onclick = () => {
        document.querySelector(".hamburger").classList.toggle("is-active");
        document.querySelector("aside").classList.toggle("is-active");
        document.querySelector(".black").classList.toggle("is-active");
        document.querySelector("body").classList.toggle("is-active");
    }