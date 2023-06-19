// // mettre à jour la gallery à la réceptionn de la réponse du serveur
import displayGallery from "./displayGallery.js";
import modaleGalleryDisplay from "./modaleGalleryDisplay.js";
import fetchWorks from "./fetchWorks.js";

const modaleGallery = document.querySelector(".modale-gallery");

const updateGalleries = async () => {
  const list = await fetchWorks();
  await displayGallery(list);
  await modaleGalleryDisplay(list, modaleGallery);
};

export default updateGalleries;
