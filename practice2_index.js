import "./styles.css";

const open = document.getElementById("open");
const modal = document.querySelector(".modalShell");
const close = document.getElementById("close");

open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};
