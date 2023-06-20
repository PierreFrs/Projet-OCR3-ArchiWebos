import verifyLocalStorage from "./utils/verifyLocalStorage.js";
import displayButtons from "./utils/displayButtons.js";
import { displayGalleryOnLoad } from "./utils/displayGallery.js";
import { openModale, closeModale } from "./utils/modale.js";
import logout from "./utils/logout.js";
import { filterProjects } from "./utils/filterProjects.js";

const modaleOverlay = document.querySelector(".modale-overlay");
const closeModaleBtn = document.querySelector(".close-modale-btn");
const logoutBtn = document.getElementById("logout-btn");

export const filtersDOM = document.querySelector(".filters-container");

// vérifie si le mode admin est actif
verifyLocalStorage();

// Affiche les boutons filtres
displayButtons(filtersDOM);

// Affiche la galerie de projets
displayGalleryOnLoad();

// Event listener pour filtrer la galerie
filtersDOM.addEventListener("click", filterProjects);

// event listener pour ouvrir la modale
const projectsModifier = document.querySelector(".projects-modifier");
projectsModifier.addEventListener("click", openModale);

// event listeners pour fermer la modale
closeModaleBtn.addEventListener("click", closeModale);
modaleOverlay.addEventListener("click", closeModale);

// logout
logoutBtn.addEventListener("click", logout);
