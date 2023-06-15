import insertAfter from "./insertAfter.js";

const addPhotoBtn = document.querySelector(".add-photo-btn");
const titleInput = document.getElementById("title");
const categoryInput = document.getElementById("categorie");

// message d'erreur si input vide
const verifyTitle = () => {
  let validate = true;
  const projectTitle = titleInput.value;

  const errorMsgEmail = document.createElement("p");
  errorMsgTitle.classList.add("error-message");
  if (!projectTitle === "") {
    validate = false;
    errorMsgEmail.textContent = "Ce champ ne peut être vide";
    insertAfter(errorMsgTitle, titleInput);
  }
  return validate;
};

const verifyCategory = () => {
  let validate = true;
  const projectCategory = categoryInput.value;
  const errorMsgCategory = document.createElement("p");
  errorMsgPassword.classList.add("error-message");
  if (projectCategory === "") {
    validate = false;
    errorMsgPassword.textContent = "Ce champ ne peut être vide";
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
