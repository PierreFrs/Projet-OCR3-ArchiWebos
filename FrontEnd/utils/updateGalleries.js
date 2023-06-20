// mettre à jour la gallery à la réceptionn de la réponse du serveur
import { displayGallery } from "./displayGallery.js";
import { displayModaleGallery } from "./displayModaleGallery.js";
import fetchWorks from "./fetchWorks.js";

const modaleGallery = document.querySelector(".modale-gallery");

// Met à jour les galleries sans recharger la page
const updateGalleries = async () => {
  try {
    const list = await fetchWorks();
    await displayGallery(list);
    await displayModaleGallery(list, modaleGallery);
  } catch (error) {
    console.error("Error updating galleries:", error);
  }
};

export default updateGalleries;
