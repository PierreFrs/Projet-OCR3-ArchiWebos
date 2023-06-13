import insertAfter from "./insertAfter.js";

const gallery = document.querySelector(".gallery");
// Handles the administrator mode
const adminMode = () => {
  const adminHeader = document.querySelector(".admin-header");
  adminHeader.style.display = "flex";
  const filtersContainer = document.querySelector(".filters-container");
  filtersContainer.classList.add("hidden");
  gallery.classList.add("gallery-margin");
  const photoModifier = document.createElement("div");
  photoModifier.innerHTML = `<div class="modifier photo-modifier">
            <i class="fa-regular fa-pen-to-square" style="color: #000"></i>
            <p>modifier</p>
          </div>`;
  const adminPhoto = document.querySelector(".admin-photo");
  insertAfter(photoModifier, adminPhoto);
  const projectsModifier = document.createElement("div");
  projectsModifier.innerHTML = `<div class="modifier projects-modifier">
            <i class="fa-regular fa-pen-to-square" style="color: #000"></i>
            <p>modifier</p>
          </div>`;
  const projectsTitle = document.querySelector(".projects-title");
  insertAfter(projectsModifier, projectsTitle);
};

export default adminMode;
