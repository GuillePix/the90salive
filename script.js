const show = document.getElementById("myPersonalCard");
const popupContainer = document.getElementById("dPopUpContainer");
show.addEventListener("click", (e) => (popupContainer.style.display = "block"));
popupContainer.addEventListener(
  "click",
  (e) => (popupContainer.style.display = "none")
);
