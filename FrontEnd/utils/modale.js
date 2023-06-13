// function to create and delete the modale

const modaleOverlay = document.querySelector(".modale-overlay");

let modaleContainer = null;

const createModale = () => {
  if (modaleContainer) {
    return;
  }
  modaleContainer = document.createElement("div");
  modaleContainer.classList.add("modale-container");
  modaleContainer.innerHTML = `<h3 class="modale-title">Galerie photo</h3>
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
