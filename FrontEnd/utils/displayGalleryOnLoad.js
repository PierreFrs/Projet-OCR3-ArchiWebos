import fetchWorks from "./fetchWorks.js";
import displayGallery from "./displayGallery.js";

// fonction permettant combinant les deux fonctions précédentes
const displayGalleryOnLoad = async () => {
  const list = await fetchWorks();
  displayGallery(list);
};

export default displayGalleryOnLoad;
