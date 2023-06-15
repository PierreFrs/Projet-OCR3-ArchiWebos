import fetchWorks from "./fetchWorks.js";
import modaleGalleryDisplay from "./modaleGalleryDisplay.js";

const modaleGalleryDisplayOnLoad = async () => {
  const list = await fetchWorks();
  return modaleGalleryDisplay(list);
};

export default modaleGalleryDisplayOnLoad;
