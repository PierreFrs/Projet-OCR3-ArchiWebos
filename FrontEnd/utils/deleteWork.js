import updateGalleries from "./updateGalleries.js";

const modaleGallery = document.querySelector(".modale-gallery");
const authToken = window.localStorage.getItem("token");

// envoyer requete fetch DELETE au serveur avec le token pour un element
const handleTrashcanClick = (e) => {
  const trashIcon = e.target;
  if (trashIcon.classList.contains("fa-trash-can")) {
    const modaleGalleryItem = trashIcon.closest(".modale-gallery-item");
    const itemId = modaleGalleryItem.id;
    console.log("Delete item with ID:", itemId);
    deleteItem(itemId, authToken);
  }
};

// Créer la requete fetch DELETE
const deleteItem = async (itemId, authToken) => {
  const url = `http://localhost:5678/api/works/${itemId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (response.ok) {
      console.log("Deletion successful");
      updateGalleries();
      return true;
    } else if (!authToken) {
      console.log("Please provide a valid authentification token");
      return false;
    } else {
      console.log("Deletion failed");
      return false;
    }
  } catch (error) {
    console.error("Error deleting item", error);
    return false;
  }
};

// event listener d'envoi de la requete DELETE
modaleGallery.addEventListener("click", (e) => {
  if (e.target.matches(".fa-trash-can")) {
    e.preventDefault();
    handleTrashcanClick(e);
  }
});
