import fetchWorks from "./fetchWorks.js";
import displayGallery from "./displayGallery.js";

const displayGalleryOnLoad = async () => {
  const list = await fetchWorks();
  displayGallery(list);
};

export default displayGalleryOnLoad;
