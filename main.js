const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
})