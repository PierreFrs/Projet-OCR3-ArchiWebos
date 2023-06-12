const gallery = document.querySelector(".gallery");
const url = "http://localhost:5678/api/works";

// Fonction récupérant les travaux via l'API
const fetchWorks = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Fonction créant les boutons de manière dynamique
const filtersDOM = document.querySelector(".filters-container");

const displayButtons = async () => {
  const list = await fetchWorks();
  const buttons = [
    "Tous",
    ...new Set(list.map((project) => project.categoryId)),
  ];
  filtersDOM.innerHTML = buttons
    .map((button) => {
      return `<button class='filter-btn' data-id="${button}">${
        button === 1
          ? "Objets"
          : button === 2
          ? "Appartements"
          : button === 3
          ? "Hotels & restaurants"
          : "Tous"
      }</button>`;
    })
    .join("");
};

displayButtons();

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

// fonction permettant combinant les deux fonctions précédentes
const onLoad = async () => {
  const list = await fetchWorks();
  displayGallery(list);
};
onLoad();

// Event listeners des boutons filtres

filtersDOM.addEventListener("click", async (e) => {
  const el = e.target;
  const list = await fetchWorks();
  if (el.classList.contains("filter-btn")) {
    if (el.dataset.id === "Tous") {
      filteredProjects = list;
    } else {
      filteredProjects = list.filter((project) => {
        return project.categoryId === parseInt(el.dataset.id);
      });
    }
    displayGallery(filteredProjects);
  }
});

// Page de connexion : integration

// Page de connexion : redirection vers la page d'accueil lorsque confirmé
// Message d'erreur si infos pas correctes

// modale fonctionnelle pour ajouter des medias et modifier

// fonction supprimer travaux

// fonction post nouveau projet via formulaire

// Afficher dynamiquement la nouvelle image de la modale
