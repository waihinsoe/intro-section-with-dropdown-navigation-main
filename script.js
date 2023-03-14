/* menu start */
const icon_menu = document.querySelector(".icon-menu");
const menu_container = document.querySelector(".menu");
const icon_close_menu = document.querySelector(".icon-close-menu");
const first_menu_item = document.querySelector(".menu-item:first-child");
const arrow_down_first_item = document.querySelector(".arrow-down-first-item");
const arrow_down_second_item = document.querySelector(
  ".arrow-down-second-item"
);
const second_menu_item = document.querySelector(".menu-item:nth-child(2)");
const features_list = document.querySelector(".features-list");
const company_list = document.querySelector(".company-list");

icon_menu.addEventListener("click", () => {
  menu_container.style.right = "0";
  icon_menu.style.opacity = "0";
});

icon_close_menu.addEventListener("click", () => {
  menu_container.style.right = `-600px`;
  icon_menu.style.opacity = "1";
});

first_menu_item.addEventListener("click", () => {
  features_list.classList.toggle("features-list-active");
  arrow_down_first_item.classList.toggle("rotate");
});

second_menu_item.addEventListener("click", () => {
  company_list.classList.toggle("company-list-active");
  arrow_down_second_item.classList.toggle("rotate");
});

/* menu end */
