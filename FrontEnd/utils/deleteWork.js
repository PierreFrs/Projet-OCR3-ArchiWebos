import updateGalleries from "./updateGalleries.js";

// supprimer un travail

// selectionner la poubelle pour chaque photo (e.target...)

const modaleGallery = document.querySelector(".modale-gallery");
const deleteAll = document.querySelector(".gallery-del");

const authToken = window.localStorage.getItem("token");

// envoyer requete fetch DELETE au serveur avec le token pour un element
const handleTrashcanClick = (e) => {
  const trashIcon = e.target;
  if (trashIcon.classList.contains("fa-trash-can")) {
    const modaleGalleryItem = trashIcon.closest(".modale-gallery-item");
    const itemId = modaleGalleryItem.id;
    console.log("Delete item with ID:", itemId);

    // Call your delete request function here with the item ID and authToken
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

// const handleDeleteAllClick = (e) => {
//   e.preventDefault();

//   deleteItems();
// };

// const deleteItems = async () => {
//   const url = `http://localhost:5678/api/works/`;
//   try {
//     const response = await fetch(url, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//     });

//     if (response.ok) {
//       console.log("Deletion successful");
//       updateGalleries();
//       return true; // Deletion successful
//     } else if (!authToken) {
//       console.log("Please provide a valid authentification token");
//       return false; // Deletion failed cause of invalid or missing token
//     } else {
//       console.log("Deletion failed");
//       return false; // Deletion failed
//     }
//   } catch (error) {
//     console.error("Error deleting item", error);
//     return false; // Request or network error
//   }
// };

modaleGallery.addEventListener("click", (e) => {
  // Check if the clicked element is a trashcan icon
  if (e.target.matches(".fa-trash-can")) {
    e.preventDefault();
    handleTrashcanClick(e);
  }
});

// deleteAll.addEventListener("click", handleDeleteAllClick);
