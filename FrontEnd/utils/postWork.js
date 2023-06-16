import insertAfter from "./insertAfter.js";

const addPhotoBtn = document.querySelector(".add-photo-btn");
const addPhotoInput = document.getElementById("addPhotoInput");
const picturePlaceholder = document.querySelector(".picture-placeholder");
const tempImage = document.querySelector(".temp-image");
const titleInput = document.getElementById("titre");
const categoryInput = document.getElementById("categorie");
const validateBtn = document.querySelector(".valider");

// // fonction permettant l'upload d'une nouvelle photo
// addPhotoBtn.addEventListener("click", () => {
//   addPhotoInput.click();
// });

// addPhotoInput.addEventListener("change", handlePhotoUpload);

// function handlePhotoUpload() {
//   const file = addPhotoInput.files[0];
//   if (file) {
//     const reader = new FileReader();

//     reader.addEventListener("load", () => {
//       const imageUrl = reader.result;
//       picturePlaceholder.innerHTML = `<div class="temp-image-container">
//                                       <img src="${imageUrl}" class="temp-image" >
//                                       </div>`;
//     });

//     reader.readAsDataURL(file);
//   }
//   toggleValidateBtn();
// }

// Function for handling the photo upload and returning the image URL
function handlePhotoUpload() {
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
}

// Function for updating the picture placeholder with the uploaded image
function updatePicturePlaceholder(imageUrl) {
  picturePlaceholder.innerHTML = `<div class="temp-image-container">
                                    <img src="${imageUrl}" class="temp-image">
                                  </div>`;
}

// Event listener for the add photo button
addPhotoBtn.addEventListener("click", () => {
  addPhotoInput.click();
});

// Event listener for the add photo input change event
addPhotoInput.addEventListener("change", async () => {
  try {
    const imageUrl = await handlePhotoUpload();
    updatePicturePlaceholder(imageUrl);
    toggleValidateBtn();
  } catch (error) {
    console.error(error);
  }
});

// // reset sur les infos entrées dans la page add
// function resetPhotoUpload() {
//   addPhotoInput.value = ""; // Clear the file input
//   picturePlaceholder.innerHTML = `<div class="image-icon-container">
//             <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#b9c5cc}</style><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
//           </div>
//           <button class="add-photo-btn"><input type="file" id="addPhotoInput" accept="image/*" class="hidden">+ Ajouter photo</button>
//           <p class="photo-format">jpg, png : 4mo max</p>  `; // Clear the picture placeholder
//   toggleValidateBtn(); // Reset the state of the validate button
// }

// fonction activant le bouton valider
const toggleValidateBtn = () => {
  validateBtn.disabled = !validateBtn.disabled;
  validateBtn.classList.toggle("grey-button");
  validateBtn.classList.toggle("green-button");
};

validateBtn.addEventListener("click", () => {
  console.log("click");
});

// message d'erreur si input vide
const verifyTitle = () => {
  let validate = true;
  const projectTitle = titleInput.value;

  const errorMsgTitle = document.createElement("p");
  errorMsgTitle.classList.add("error-message");
  if (!projectTitle === "") {
    validate = false;
    errorMsgTitle.textContent = "Ce champ ne peut être vide";
    insertAfter(errorMsgTitle, titleInput);
  }
  return validate;
};

const verifyCategory = () => {
  let validate = true;
  const projectCategory = categoryInput.value;
  const errorMsgCategory = document.createElement("p");
  errorMsgCategory.classList.add("error-message");
  if (projectCategory === "") {
    validate = false;
    errorMsgCategory.textContent = "Ce champ ne peut être vide";
    insertAfter(errorMsgCategory, titleInput);
  }
  return validate;
};

const verifyInfos = () => {
  let validate = true;
  verifyTitle();
  verifyCategory();
  return validate;
};

// post request

const postItem = async () => {
  const url = "http://localhost:5678/api/works";
  const authToken = localStorage.getItem("token");

  const title = titleInput.value;
  const category = parseInt(categoryInput.value);
  const uploadedImageUrl = handlePhotoUpload();

  const validate = verifyInfos();
  if (!validate) {
    return;
  }

  const data = {
    image: uploadedImageUrl,
    title: title,
    category: category,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log("post successful");
      updateGalleries();
      return true;
    } else if (!authToken) {
      console.log("Please provide a valid authentification token");
      return false;
    } else {
      console.log("post failed");
      return false;
    }
  } catch {
    console.error("Error deleting item", error);
    return false;
  }
};

validateBtn.addEventListener("click", postItem);
