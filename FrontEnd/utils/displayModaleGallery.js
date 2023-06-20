import fetchWorks from "./fetchWorks.js";

// Fonction d'affichage dynamique des projets dans la modale
const displayModaleGallery = (list, modaleGallery) => {
  const projectsList = list
    .map(({ id, imageUrl }) => {
      return `<div class="modale-gallery-item" id=${id}>
              <div class="modale-img-container">
                <img src="${imageUrl}" alt="" />
                <div class="trash-container flex">
                  <i
                    class="fa-sharp fa-regular fa-trash-can fa-2xs"
                    style="color: #ffffff"
                  ></i>
                </div>
              </div>
              <button class="edit">éditer</button>
            </div>`;
    })
    .join("");

  modaleGallery.innerHTML = projectsList;
};

// Fonction récupérant les travaux sur l'API et les envoie vers la fonction displayModaleGallery
const displayModaleGalleryOnLoad = async (modaleGallery) => {
  const list = await fetchWorks();
  return displayModaleGallery(list, modaleGallery);
};

export { displayModaleGallery, displayModaleGalleryOnLoad };
