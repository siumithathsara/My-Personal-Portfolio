const burger = document.getElementById("burger");
const menuPanel = document.getElementById("menu-panel-id");
const buttonClose = document.getElementById("button-close-id");

burger.addEventListener("click", () => {
    menuPanel.classList.add("active");
    burger.classList.add("hide");
});

buttonClose.addEventListener("click", () => {
    menuPanel.classList.remove("active");
    burger.classList.remove("hide");
});