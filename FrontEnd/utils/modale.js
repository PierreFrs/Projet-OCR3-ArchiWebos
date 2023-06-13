// function to create and delete the modale
import modaleGalleryDisplay from "./modaleGalleryDisplay.js";
const modaleOverlay = document.querySelector(".modale-overlay");

let modaleContainer = null;

const createModale = async () => {
  if (modaleContainer) {
    return;
  }
  modaleContainer = document.createElement("div");
  modaleContainer.classList.add("modale-container");
  const galleryItems = await modaleGalleryDisplay();
  modaleContainer.innerHTML = `<h3 class="modale-title">Galerie photo</h3>
          <div class="modale-gallery">
            ${galleryItems}
          </div>
          <hr />
          <button class="add-photo">Ajouter une photo</button>
          <button class="gallery-del">Supprimer la galerie</button>`;
  modale.appendChild(modaleContainer);
};

const displayModaleWindow = () => {
  createModale();
  modale.classList.remove("hidden");
};

const displayOverlay = () => {
  modaleOverlay.classList.remove("hidden");
};

const displayModale = () => {
  displayModaleWindow();
  displayOverlay();
};

const hideOverlay = () => {
  modaleOverlay.classList.add("hidden");
};

const hideModaleWindow = () => {
  modale.classList.add("hidden");
};

const closeModale = () => {
  hideOverlay();
  hideModaleWindow();
};

export { displayModale, closeModale };
