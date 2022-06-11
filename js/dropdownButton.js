const dropDown_btn = document.getElementById("dropdown_btn");
const dropDown = document.getElementById("dropdown");
const dropDown_icon = document.getElementById("dropdown_icon");
dropDown_btn.addEventListener("click", () => {
    dropDown.classList.toggle("hidden");
    dropDown.classList.toggle("shown");
    dropDown_icon.classList.toggle("dropDown_icon");
    dropDown_icon.classList.toggle("dropDown_icon_active");
});