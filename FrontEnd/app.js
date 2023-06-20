import verifyLocalStorage from "./utils/verifyLocalStorage.js";
import displayButtons from "./utils/displayButtons.js";
import { displayGalleryOnLoad } from "./utils/displayGallery.js";
import { displayModale, closeModale } from "./utils/modale.js";
import logout from "./utils/logout.js";
import {
  filterProjects,
  changeFilterButtonColor,
} from "./utils/filterProjects.js";

const modaleOverlay = document.querySelector(".modale-overlay");
const closeModaleBtn = document.querySelector(".close-modale-btn");
const logoutBtn = document.getElementById("logout-btn");

export const filtersDOM = document.querySelector(".filters-container");

verifyLocalStorage();

displayButtons(filtersDOM);

displayGalleryOnLoad();

// Event listeners des boutons filtres

filtersDOM.addEventListener("click", (e) => {
  filterProjects(e);
  // changeFilterButtonColor(e);
});

// event listeners pour la modale

closeModaleBtn.addEventListener("click", closeModale);
modaleOverlay.addEventListener("click", closeModale);

// logout

logoutBtn.addEventListener("click", logout);

// event listener pour ouvrir la modale
const projectsModifier = document.querySelector(".projects-modifier");
projectsModifier.addEventListener("click", () => {
  displayModale();
});
