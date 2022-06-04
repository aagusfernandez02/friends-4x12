// HAMBURGUER LOGO
const navMenu = document.getElementById("navMenu_mobile");
const sideBar = document.getElementById("sidebar");
navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    sideBar.classList.toggle("hiddenSidebar");
    sideBar.classList.toggle("shownSidebar");
})