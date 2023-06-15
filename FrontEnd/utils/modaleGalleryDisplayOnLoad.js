import fetchWorks from "./fetchWorks.js";
import modaleGalleryDisplay from "./modaleGalleryDisplay.js";

const modaleGalleryDisplayOnLoad = async (modaleGallery) => {
  const list = await fetchWorks();
  return modaleGalleryDisplay(list, modaleGallery);
};

export default modaleGalleryDisplayOnLoad;
