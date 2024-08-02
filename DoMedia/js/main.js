/*===== TOGGLE MENU =====*/
const navMenu = document.getElementById("nav_menu"),
  toggleMenu_Btn = document.getElementById("toggle_btn"),
  closeMenu_btn = document.getElementById("close_btn");

// SHOW MENU
toggleMenu_Btn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// HIDE MENU
closeMenu_btn.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

/*===== ACTIVE AND REMOVE MENU =====*/
const menuLinks = document.querySelectorAll(".nav_menu_item_link");

function clickAction() {
  /* ==== ADD'S ('active') class to the LINK ==== */
  menuLinks.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /* ==== AFTER CLICK REMOVE CLASS ('show') FROM 'navMenu' ==== */
  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show");
}

menuLinks.forEach((n) => n.addEventListener("click", clickAction));




