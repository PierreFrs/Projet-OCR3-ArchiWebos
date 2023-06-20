// // mettre à jour la gallery à la réceptionn de la réponse du serveur
import { displayGallery } from "./displayGallery.js";
import { displayModaleGallery } from "./displayModaleGallery.js";
import fetchWorks from "./fetchWorks.js";

const modaleGallery = document.querySelector(".modale-gallery");

const updateGalleries = async () => {
  const list = await fetchWorks();
  await displayGallery(list);
  await displayModaleGallery(list, modaleGallery);
};

export default updateGalleries;
