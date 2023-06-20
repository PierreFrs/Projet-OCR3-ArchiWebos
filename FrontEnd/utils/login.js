import insertAfter from "./insertAfter.js";
import verifyLocalStorage from "./verifyLocalStorage.js";
import resetErrors from "./resetErrors.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");

verifyLocalStorage();

// fonctions de verification des infos du formulaire de login

const verifyEmail = () => {
  const userEmail = emailInput.value;

  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const errorMsgEmail = createErrorMessage("L'email doit être valide");

  if (!emailRegEx.test(userEmail) && userEmail !== "") {
    insertAfter(errorMsgEmail, emailInput);
    return false;
  } else if (userEmail === "") {
    errorMsgEmail.textContent = "Ce champ ne peut être vide";
    insertAfter(errorMsgEmail, emailInput);
    return false;
  }
  return true;
};

const verifyPassword = () => {
  const userPassword = passwordInput.value;
  const errorMsgPassword = createErrorMessage("Ce champ ne peut être vide");

  if (userPassword === "") {
    insertAfter(errorMsgPassword, passwordInput);
    return false;
  }
  return true;
};

const createErrorMessage = (text) => {
  const errorMsg = document.createElement("p");
  errorMsg.classList.add("error-message");
  errorMsg.textContent = text;
  return errorMsg;
};

// Combine les deux fonctions précédentes
const verifyInfos = () => {
  const isEmailValid = verifyEmail();
  const isPasswordValid = verifyPassword();
  return isEmailValid && isPasswordValid;
};

// fonction pour envoyer la requete POST
const sendInfos = async () => {
  const url = "http://localhost:5678/api/users/login";
  const email = emailInput.value;
  const password = passwordInput.value;

  const data = {
    email,
    password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (responseData.userId && responseData.token) {
      console.log("Login successful");
      window.localStorage.setItem("userId", responseData.userId);
      window.localStorage.setItem("token", responseData.token);
      window.location.replace("../index.html");
    } else {
      console.log("Login failed");
      const errorMsgPassword = createErrorMessage(
        "L'identification a échoué, veuillez réessayer ou cliquer sur 'Mot de passe oublié'."
      );
      insertAfter(errorMsgPassword, submitBtn);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

// fonction pour activer la fonction sendInfos après vérification desdites infos
const handleSubmit = (e) => {
  e.preventDefault();
  resetErrors();
  const isFormValid = verifyInfos();

  if (isFormValid) {
    sendInfos();
  }
};

// event listener du bouton login
submitBtn.addEventListener("click", handleSubmit);
