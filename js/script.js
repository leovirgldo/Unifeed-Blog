let btnMenu = document.querySelector(".btn_menu");
let menu = document.querySelector("nav");

btnMenu.addEventListener("click", () => {
  if (menu.classList.contains("active-menu")) {
    menu.classList.toggle("active-menu");
    document.body.style.overflow = "auto";
  } else {
    menu.classList.toggle("active-menu");
    document.body.style.overflow = "hidden";
  }
});
