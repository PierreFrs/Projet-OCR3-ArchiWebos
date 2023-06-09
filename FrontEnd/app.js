const gallery = document.querySelector(".gallery");
const url = "http://localhost:5678/api/works";

// Fonction récupérant les travaux via l'API
const fetchWorks = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Fonction d'affichage dynamique des projets
const displayGallery = (list) => {
  const projectsList = list
    .map((project) => {
      const { id, title, imageUrl, categoryId } = project;
      return `<figure id=${id} category-id=${categoryId}>
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

// afficher la liste des travaux en dynamique (.map())

// Page de connexion : integration

// Page de connexion : redirection vers la page d'accueil lorsque confirmé
// Message d'erreur si infos pas correctes

// modale fonctionnelle pour ajouter des medias et modifier

// fonction supprimer travaux

// fonction post nouveau projet via formulaire

// Afficher dynamiquement la nouvelle image de la modale
