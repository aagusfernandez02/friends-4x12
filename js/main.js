// DROPDOWN BUTTON
const dropDown_btn = document.getElementById("dropdown_btn");
const dropDown = document.getElementById("dropdown");
const dropDown_icon = document.getElementById("dropdown_icon");
dropDown_btn.addEventListener("click", () => {
    dropDown.classList.toggle("hidden");
    dropDown.classList.toggle("shown");
    dropDown_icon.classList.toggle("dropDown_icon");
    dropDown_icon.classList.toggle("dropDown_icon_active");
});

// HAMBURGUER LOGO
const navMenu = document.getElementById("navMenu_mobile");
const sideBar = document.getElementById("sidebar");
navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    sideBar.classList.toggle("hiddenSidebar");
    sideBar.classList.toggle("shownSidebar");
})