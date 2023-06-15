import displayGallery from "./displayGallery.js";
import modaleGalleryDisplay from "./modaleGalleryDisplay.js";
import fetchWorks from "./fetchWorks.js";

// supprimer un travail

// selectionner la poubelle pour chaque photo (e.target...)

const modaleGallery = document.querySelector(".modale-gallery");

modaleGallery.addEventListener("click", (e) => {
  // Check if the clicked element is a trashcan icon
  if (e.target.matches(".fa-trash-can")) {
    e.preventDefault();
    handleTrashcanClick(e);
  }
});

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
      return true; // Deletion successful
    } else if (!authToken) {
      console.log("Please provide a valid authentification token");
      return false; // Deletion failed cause of invalid or missing token
    } else {
      console.log("Deletion failed");
      return false; // Deletion failed
    }
  } catch (error) {
    console.error("Error deleting item", error);
    return false; // Request or network error
  }
};

// envoyer requete fetch DELETE au serveur avec le token
const handleTrashcanClick = (e) => {
  const authToken = window.localStorage.getItem("token");
  const trashIcon = e.target;
  if (trashIcon.classList.contains("fa-trash-can")) {
    const modaleGalleryItem = trashIcon.closest(".modale-gallery-item");
    const itemId = modaleGalleryItem.id;
    console.log("Delete item with ID:", itemId);

    // Call your delete request function here with the item ID and authToken
    deleteItem(itemId, authToken);
  }
};

// // mettre à jour la gallery à la réceptionn de la réponse du serveur
const updateGalleries = async () => {
  const list = await fetchWorks();
  await displayGallery(list);
  await modaleGalleryDisplay(list);
};
