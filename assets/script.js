const iconContainer = document.getElementById("icon-container");
const defaultMenu = document.getElementById("close");
const newMenu = document.getElementById("open");

const defaultIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-7v2h16V6H4z"/></svg>`;
const newIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`;

let isDefault = true;

iconContainer.addEventListener("click", () => {
  if (isDefault) {
    iconContainer.innerHTML = newIcon;
    newMenu.style.display = "block";
    defaultMenu.style.display = "none";
  } else {
    iconContainer.innerHTML = defaultIcon;
    defaultMenu.style.display = "block";
    newMenu.style.display = "none";
  }
  isDefault = !isDefault; // Toggle state
});
