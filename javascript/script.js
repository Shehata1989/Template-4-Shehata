let iconsDelete1 = document.querySelectorAll(".tasks .box i")[0];
let iconsDelete2 = document.querySelectorAll(".tasks .box i")[1];
let iconsDelete3 = document.querySelectorAll(".tasks .box i")[2];
let iconsDelete4 = document.querySelectorAll(".tasks .box i")[3];
let iconsDelete5 = document.querySelectorAll(".tasks .box i")[4];
let infoDelete1 = document.querySelectorAll(".tasks .box")[0];
let infoDelete2 = document.querySelectorAll(".tasks .box")[1];
let infoDelete3 = document.querySelectorAll(".tasks .box")[2];
let infoDelete4 = document.querySelectorAll(".tasks .box")[3];
let infoDelete5 = document.querySelectorAll(".tasks .box")[4];

iconsDelete1.addEventListener("click", () => {
  infoDelete1.classList.toggle("delete");
});
iconsDelete2.addEventListener("click", () => {
  infoDelete2.classList.toggle("delete");
});
iconsDelete3.addEventListener("click", () => {
  infoDelete3.classList.toggle("delete");
});
iconsDelete4.addEventListener("click", () => {
  infoDelete4.classList.toggle("delete");
});
iconsDelete5.addEventListener("click", () => {
  infoDelete5.classList.toggle("delete");
});
