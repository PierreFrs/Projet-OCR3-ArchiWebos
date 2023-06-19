import fetchWorks from "./utils/fetchWorks.js";
import verifyLocalStorage from "./utils/verifyLocalStorage.js";
import displayButtons from "./utils/displayButtons.js";
import displayGallery from "./utils/displayGallery.js";
import displayGalleryOnLoad from "./utils/displayGalleryOnLoad.js";
import { displayModale, closeModale } from "./utils/modale.js";

const modaleOverlay = document.querySelector(".modale-overlay");
const closeModaleBtn = document.querySelector(".close-modale-btn");
const logoutBtn = document.getElementById("logout-btn");

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

// event listeners pour la modale

closeModaleBtn.addEventListener("click", closeModale);
modaleOverlay.addEventListener("click", closeModale);

const logout = () => {
  console.log("click");
  window.localStorage.clear();
  window.location.reload();
};

// logout

logoutBtn.addEventListener("click", logout);

const projectsModifier = document.querySelector(".projects-modifier");

// event listener pour ouvrir la modale

projectsModifier.addEventListener("click", () => {
  displayModale();
});
