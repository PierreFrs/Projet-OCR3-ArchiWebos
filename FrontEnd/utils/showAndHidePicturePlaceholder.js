// Fonctions gérant l'affichage ou non du placeholder de photo avant import

const hidePicturePlaceholder = (picturePlaceholder) => {
  picturePlaceholder.classList.add("hidden");
  picturePlaceholder.classList.remove("flex");
};

const showPicturePlaceholder = (picturePlaceholder) => {
  picturePlaceholder.classList.remove("hidden");
  picturePlaceholder.classList.add("flex");
};

export { hidePicturePlaceholder, showPicturePlaceholder };
