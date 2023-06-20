import fetchWorks from "./fetchWorks.js";

const gallery = document.querySelector(".gallery");

// Fonction d'affichage dynamique des projets
const displayGallery = (list) => {
  const projectsList = list
    .map(({ id, title, imageUrl, categoryId }) => {
      return `<figure id=${id} data-id=${categoryId}>
            <img src=${imageUrl} alt=${title} />
            <figcaption>${title}</figcaption>
          </figure>`;
    })
    .join("");

  gallery.innerHTML = projectsList;
};

// Fonction récupérant les travaux sur l'API et les envoie vers la fonction displayGallery
const displayGalleryOnLoad = async () => {
  const list = await fetchWorks();
  displayGallery(list);
};

export { displayGallery, displayGalleryOnLoad };
