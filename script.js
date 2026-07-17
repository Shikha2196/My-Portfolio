let icon = document.querySelector("#bar-icon");
let bar = document.querySelector(".navbar");
icon.onclick = () => {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
    bar.classList.toggle("active");
}
window.onscroll = () => {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
    bar.classList.remove("active");
}
