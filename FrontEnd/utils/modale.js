import { displayModaleGalleryOnLoad } from "./displayModaleGallery.js";

const modaleOverlay = document.querySelector(".modale-overlay");
const modale = document.getElementById("modale");
const returnArrow = document.querySelector(".left-arrow-container");
const modaleContainer = document.querySelector(".modale-container");

// ouvre et ferme la modale

const openModale = () => {
  modale.classList.remove("hidden");
  modaleOverlay.classList.remove("hidden");
};

const closeModale = () => {
  modale.classList.add("hidden");
  modaleOverlay.classList.add("hidden");
  resetModale();
  createMainModalePage();
  createAddPage();
};

const resetModale = () => {
  modaleContainer.innerHTML = "";
};

// Crée le contenu du modaleContainer
//  Main Modale Page
const createMainModalePage = () => {
  const mainModalePage = document.createElement("div");
  mainModalePage.classList.add("main-modale-page");

  mainModalePage.innerHTML = `<h3 class="modale-title">Galerie photo</h3>
          <div class="modale-gallery flex">
          </div>
          <hr />
          <button class="go-to-add-photo-btn button green-button">Ajouter une photo</button>
          <button class="gallery-del">Supprimer la galerie</button>`;
  modaleContainer.appendChild(mainModalePage);

  const modaleGallery = document.querySelector(".modale-gallery");
  displayModaleGalleryOnLoad(modaleGallery);
};
createMainModalePage();

// Add Page
const createAddPage = () => {
  const addPage = document.createElement("div");
  addPage.classList.add("modale-add-page");
  addPage.classList.add("hidden");

  addPage.innerHTML = `<h3 class="modale-title">Ajout photo</h3>
        <div class="picture-placeholder flex">
          <div class="image-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#b9c5cc}</style><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
          </div>
          <button class="add-photo-btn"><input type="file" id="addPhotoInput" accept="image/*" class="hidden">+ Ajouter photo</button>
          <p class="photo-format">jpg, png : 4mo max</p>          
        </div>
        <form action="submit" class="add-photo-form flex">
          <label for="titre">Titre</label>
          <input type="text" id="titre" name="titre">
          <label for="categorie">Catégorie</label>
          <select id="categorie" name="categorie">
            <option value="" selected> </option>
            <option value="1">Objets</option>
            <option value="2">Appartements</option>
            <option value="3">Hotels & restaurants</option>
          </select>
        </form>
        <hr />
        <button type="submit" class="valider button grey-button" disabled>Valider</button>`;

  modaleContainer.appendChild(addPage);
};
createAddPage();

// Redirige vers la page d'ajout
const toggleModalePage = () => {
  const mainModalePage = document.querySelector(".main-modale-page");
  const addPage = document.querySelector(".modale-add-page");
  mainModalePage.classList.toggle("hidden");
  addPage.classList.toggle("hidden");
  returnArrow.classList.toggle("hidden");
};

// bouton menant sur la page d'ajout de projet

const goToAddBtn = modaleContainer.querySelector(".go-to-add-photo-btn");
goToAddBtn.addEventListener("click", toggleModalePage);
returnArrow.addEventListener("click", toggleModalePage);

export { openModale, closeModale };
