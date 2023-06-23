import insertAfter from "./insertAfter.js";

const gallery = document.querySelector(".gallery");

// transforme la page d'accueil en page admin ou "admin mode"
const adminMode = () => {
  const adminHeader = document.querySelector(".admin-header");
  adminHeader.style.display = "flex";

  const filtersContainer = document.querySelector(".filters-container");
  filtersContainer.classList.add("hidden");
  filtersContainer.classList.remove("flex");

  gallery.classList.add("gallery-margin");

  const createModifier = (className, content) => {
    const modifier = document.createElement("div");
    modifier.innerHTML = `
      <div class="modifier ${className} flex">
        <i class="fa-regular fa-pen-to-square fa-lg flex"></i>
        <p>${content}</p>
      </div>
    `;
    return modifier;
  };

  const adminPhoto = document.querySelector(".admin-photo");
  const photoModifier = createModifier("photo-modifier", "modifier");
  insertAfter(photoModifier, adminPhoto);

  const projectsTitle = document.querySelector(".projects-title");
  const projectsModifier = createModifier("projects-modifier", "modifier");
  insertAfter(projectsModifier, projectsTitle);
};

export default adminMode;
