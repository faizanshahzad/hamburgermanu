let position = 0;
const positionsNumber = 4;
const menuArray = document.querySelectorAll(".menu");

menuArray.forEach((menu) => {
  menu.addEventListener("click", () => {
    position = (position + 1) % positionsNumber;
    menu.dataset.position = position;
  });
});
