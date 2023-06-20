import insertAfter from "./insertAfter.js";
import updateGalleries from "./updateGalleries.js";
import resetErrors from "./resetErrors.js";

const addPhotoBtn = document.querySelector(".add-photo-btn");
const addPhotoInput = document.getElementById("addPhotoInput");
const picturePlaceholder = document.querySelector(".picture-placeholder");
const titleInput = document.getElementById("titre");
const categoryInput = document.getElementById("categorie");
const validateBtn = document.querySelector(".valider");

// Function for handling the photo upload and returning the image URL
const handlePhotoUpload = () => {
  return new Promise((resolve, reject) => {
    const file = addPhotoInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const imageUrl = reader.result;
        resolve(imageUrl);
      });
      reader.readAsDataURL(file);
    } else {
      reject("No file selected.");
    }
  });
};

// Affiche la photo choisie par l'utilisateur
const updatePicturePlaceholder = (imageUrl) => {
  picturePlaceholder.innerHTML = `<div class="temp-image-container">
                                    <img src="${imageUrl}" class="temp-image">
                                  </div>`;
};

// Event listener du boutton ajouter
addPhotoBtn.addEventListener("click", () => {
  addPhotoInput.click();
});

// Event listener de l'input photo
addPhotoInput.addEventListener("change", async () => {
  try {
    const imageUrl = await handlePhotoUpload();
    updatePicturePlaceholder(imageUrl);
    toggleValidateBtn();
  } catch (error) {
    console.error(error);
  }
});

// fonction activant le bouton valider
const toggleValidateBtn = () => {
  validateBtn.disabled = !validateBtn.disabled;
  validateBtn.classList.toggle("grey-button");
  validateBtn.classList.toggle("green-button");
};

// Vérifications des informations du formulaire d'ajout de projet

const verifyTitle = () => {
  const projectTitle = titleInput.value;

  if (!projectTitle) {
    const errorMsgTitle = document.createElement("p");
    errorMsgTitle.classList.add("error-message");
    errorMsgTitle.textContent = "Ce champ ne peut être vide";
    insertAfter(errorMsgTitle, titleInput);
    return false;
  }
  return true;
};

const verifyCategory = () => {
  const projectCategory = categoryInput.value;

  if (!projectCategory) {
    const errorMsgCategory = document.createElement("p");
    errorMsgCategory.classList.add("error-message");
    errorMsgCategory.textContent = "Ce champ ne peut être vide";
    insertAfter(errorMsgCategory, categoryInput);
    return false;
  }
  return true;
};

// Combine les deux fonctions précédentes
const verifyInfos = () => {
  const isValidTitle = verifyTitle();
  const isValidCategory = verifyCategory();
  return isValidTitle && isValidCategory;
};

// Gere l'envoie de la requete POST
const postItem = async (e) => {
  e.preventDefault();

  resetErrors();

  const url = "http://localhost:5678/api/works";
  const authToken = localStorage.getItem("token");

  const title = titleInput.value;
  const category = parseInt(categoryInput.value);
  const uploadedImage = addPhotoInput.files[0];

  if (!verifyInfos()) {
    return;
  }

  const formData = new FormData();
  formData.append("image", uploadedImage);
  formData.append("title", title);
  formData.append("category", category);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: formData,
    });

    if (response.ok) {
      console.log("post successful");
      successMessage();
      updateGalleries();
      resetErrors();
      return true;
    } else if (!authToken) {
      console.log("Please provide a valid authentication token");
      return false;
    } else {
      console.log("post failed");
      return false;
    }
  } catch (error) {
    console.error("Error posting item", error);
    return false;
  }
};

// affiche un message si la création du nouveau projet est un succès
const successMessage = () => {
  const existingSuccessMsg = document.querySelector(".success-message");
  if (existingSuccessMsg) {
    existingSuccessMsg.remove();
  }
  const successMsg = document.createElement("p");
  successMsg.textContent = "Le projet a été ajouté avec succès";
  successMsg.classList.add("success-message");
  insertAfter(successMsg, validateBtn);
};

validateBtn.addEventListener("click", postItem);
