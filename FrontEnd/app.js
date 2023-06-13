import fetchWorks from "./utils/fetchWorks.js";
import verifyLocalStorage from "./utils/verifyLocalStorage.js";
import displayButtons from "./utils/displayButtons.js";
import displayGallery from "./utils/displayGallery.js";
import displayGalleryOnLoad from "./utils/displayGalleryOnLoad.js";
import { displayModale, closeModale } from "./utils/modale.js";

const gallery = document.querySelector(".gallery");
const modaleGallery = document.querySelector(".modale-gallery");
const modaleOverlay = document.querySelector(".modale-overlay");
const modale = document.getElementById("modale");
const closeModaleBtn = document.querySelector(".close-modale-btn");
const deleteGalleryBtn = document.querySelector(".gallery-del");
const deleteProjectBtn = document.querySelector(".trash-container");

export const filtersDOM = document.querySelector(".filters-container");

verifyLocalStorage();

displayButtons(filtersDOM);

displayGalleryOnLoad();

// Event listeners des boutons filtres

filtersDOM.addEventListener("click", async (e) => {
  const el = e.target;
  const list = await fetchWorks();
  let filteredProjects;
  if (el.classList.contains("filter-btn")) {
    if (el.dataset.id === "Tous") {
      filteredProjects = list;
    } else {
      filteredProjects = list.filter((project) => {
        return project.categoryId === parseInt(el.dataset.id);
      });
    }
    displayGallery(filteredProjects);
  }
});

// event listeners

projectsModifier.addEventListener("click", () => {
  displayModale();
});

closeModaleBtn.addEventListener("click", closeModale);
modaleOverlay.addEventListener("click", closeModale);
// fonction supprimer travaux

// fonction post nouveau projet via formulaire

// Afficher dynamiquement la nouvelle image de la modale
