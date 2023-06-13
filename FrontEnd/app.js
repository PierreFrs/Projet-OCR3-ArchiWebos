const gallery = document.querySelector(".gallery");
const modaleGallery = document.querySelector(".modale-gallery");

const deleteGalleryBtn = document.querySelector(".gallery-del");
const deleteProjectBtn = document.querySelector(".trash-container");
const url = "http://localhost:5678/api/works";

// Function to insert an element after the targeted one
const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

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
  const projectsModifierBtn = document.querySelector(".projects-modifier");
  const projectsTitle = document.querySelector(".projects-title");
  insertAfter(projectsModifier, projectsTitle);
};

// Fonction de vérification du localStorage
const verifyLocalStorage = () => {
  const login = window.localStorage.getItem("login");
  if (login === "success") {
    adminMode();
  }
};
verifyLocalStorage();

// Fonction récupérant les travaux via l'API
const fetchWorks = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Fonction créant les boutons de manière dynamique
const filtersDOM = document.querySelector(".filters-container");

const displayButtons = async () => {
  const list = await fetchWorks();
  const buttons = [
    "Tous",
    ...new Set(list.map((project) => project.categoryId)),
  ];
  filtersDOM.innerHTML = buttons
    .map((button) => {
      return `<button class='filter-btn' data-id="${button}">${
        button === 1
          ? "Objets"
          : button === 2
          ? "Appartements"
          : button === 3
          ? "Hotels & restaurants"
          : "Tous"
      }</button>`;
    })
    .join("");
};

displayButtons();

// Fonction d'affichage dynamique des projets
const displayGallery = (list) => {
  const projectsList = list
    .map((project) => {
      const { id, title, imageUrl, categoryId } = project;

      return `<figure id=${id} data-id=${categoryId}>
            <img src=${imageUrl} alt=${title} />
            <figcaption>${title}</figcaption>
          </figure>`;
    })
    .join("");
  gallery.innerHTML = projectsList;
};

// fonction permettant combinant les deux fonctions précédentes
const onLoad = async () => {
  const list = await fetchWorks();
  displayGallery(list);
};
onLoad();

// Event listeners des boutons filtres

filtersDOM.addEventListener("click", async (e) => {
  const el = e.target;
  const list = await fetchWorks();
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

// modale fonctionnelle pour ajouter des medias et modifier
// function to display modale

// function to create the modale

const createOverlay = () => {
  const modaleOverlay = document.createElement("div");
  modaleOverlay.classList.add("modale-overlay");
  document.body.appendChild(modaleOverlay);
};

const createModale = () => {
  const modale = document.createElement("aside");
  modale.classList.add("modale");
  modale.id = "modale";
  modale.innerHTML = `<div class="modale-container">
          <i class="fa-solid fa-xmark close-modale-btn"></i>
          <h3 class="modale-title">Galerie photo</h3>
          <div class="modale-gallery">
            <div class="modale-gallery-item">
              <div class="modale-img-container">
                <img src="./assets/images/abajour-tahina.png" alt="" />
                <div class="trash-container">
                  <i
                    class="fa-sharp fa-regular fa-trash-can fa-2xs"
                    style="color: #ffffff"
                  ></i>
                </div>
              </div>
              <button class="edit">éditer</button>
            </div>
            <div class="modale-gallery-item">
              <div class="modale-img-container">
                <img src="./assets/images/abajour-tahina.png" alt="" />
                <div class="trash-container">
                  <i
                    class="fa-sharp fa-regular fa-trash-can fa-2xs"
                    style="color: #ffffff"
                  ></i>
                </div>
              </div>
              <button class="edit">éditer</button>
            </div>
            <div class="modale-gallery-item">
              <div class="modale-img-container">
                <img src="./assets/images/abajour-tahina.png" alt="" />
                <div class="trash-container">
                  <i
                    class="fa-sharp fa-regular fa-trash-can fa-2xs"
                    style="color: #ffffff"
                  ></i>
                </div>
              </div>
              <button class="edit">éditer</button>
            </div>
            <div class="modale-gallery-item">
              <div class="modale-img-container">
                <img src="./assets/images/abajour-tahina.png" alt="" />
                <div class="trash-container">
                  <i
                    class="fa-sharp fa-regular fa-trash-can fa-2xs"
                    style="color: #ffffff"
                  ></i>
                </div>
              </div>
              <button class="edit">éditer</button>
            </div>
            <div class="modale-gallery-item">
              <div class="modale-img-container">
                <img src="./assets/images/abajour-tahina.png" alt="" />
                <div class="trash-container">
                  <i
                    class="fa-sharp fa-regular fa-trash-can fa-2xs"
                    style="color: #ffffff"
                  ></i>
                </div>
              </div>
              <button class="edit">éditer</button>
            </div>
          </div>
          <hr />
          <button class="add-photo">Ajouter une photo</button>
          <button class="gallery-del">Supprimer la galerie</button>
        </div>`;

  document.body.appendChild(modale);
};

const deleteOverlay = () => {
  modaleOverlay.remove();
};

const deleteModale = () => {
  modale.remove();
};

// display and close functions
const projectsModifierBtn = document.querySelector(".projects-modifier");
const displayModale = () => {
  createOverlay();
  createModale();
};

const closeModale = () => {
  deleteOverlay();
  deleteModale();
};

// event listeners

projectsModifierBtn.addEventListener("click", () => {
  displayModale();
});

const modaleOverlay = document.querySelector(".modale-overlay");
const closeModaleBtn = document.querySelector(".close-modale-btn");

closeModaleBtn.addEventListener("click", closeModale);
modaleOverlay.addEventListener("click", closeModale);
// fonction supprimer travaux

// fonction post nouveau projet via formulaire

// Afficher dynamiquement la nouvelle image de la modale
