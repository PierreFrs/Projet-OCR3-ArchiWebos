const gallery = document.querySelector(".gallery");

// Fonction d'affichage dynamique des projets
const displayGallery = (list) => {
  const projectsList = list
    .map((project) => {
      const { id, title, imageUrl, categoryId } = project;

      return `<figure id=${id} data-id=${categoryId}>
            <img src=${imageUrl} alt=${title} />
            <figcaption>${title}</figcaption>
          </figure>`;
    })
    .join("");
  gallery.innerHTML = projectsList;
};

export default displayGallery;
