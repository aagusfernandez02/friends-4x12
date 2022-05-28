// HAMBURGUER LOGO
const navMenu = document.querySelector("#navMenu_mobile");
const sideBar = document.querySelector("#sidebar");
navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    sideBar.classList.toggle("hiddenSidebar");
    sideBar.classList.toggle("shownSidebar");
})