emailInput = document.getElementById("email");
passwordInput = document.getElementById("password");
submitBtn = document.getElementById("submit-btn");

const verifyLocalStorage = () => {
  let login = window.localStorage.getItem("login");
  if (login === "success") {
    window.location.replace("./index.html");
  }
};
verifyLocalStorage();

// fonctions de verification des infos

const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

const verifyEmail = () => {
  let validate = true;
  userEmail = emailInput.value;

  emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const errorMsgEmail = document.createElement("p");
  errorMsgEmail.classList.add("error-message");
  if (!emailRegEx.test(userEmail) && userEmail !== "") {
    validate = false;
    errorMsgEmail.textContent = "L'email doit être valide";
    insertAfter(errorMsgEmail, emailInput);
  } else if (userEmail === "") {
    validate = false;
    errorMsgEmail.textContent = "Ce champ ne peut être vide";
    insertAfter(errorMsgEmail, emailInput);
  }
  return validate;
};

const verifyPassword = () => {
  let validate = true;
  userPassword = passwordInput.value;
  const errorMsgPassword = document.createElement("p");
  errorMsgPassword.classList.add("error-message");
  if (userPassword === "") {
    validate = false;
    errorMsgPassword.textContent = "Ce champ ne peut être vide";
    insertAfter(errorMsgPassword, passwordInput);
  }
  return validate;
};

const verifyInfos = () => {
  let validate = true;
  verifyEmail();
  verifyPassword();
  return validate;
};

// fonction pour envoyer les infos

const sendInfos = () => {
  const url = "http://localhost:5678/api/users/login";
  const email = emailInput.value;
  const password = passwordInput.value;

  const data = {
    email: email,
    password: password,
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      // Handle the response from the server
      if (responseData.userId && responseData.token) {
        // Positive response
        console.log("Login successful");
        window.localStorage.setItem("login", "success");
        window.location.replace("./index.html");
      } else {
        // Negative response
        console.log("Login failed");
        const errorMsgPassword = document.createElement("p");
        errorMsgPassword.classList.add("error-message");
        errorMsgPassword.textContent =
          "L'identification a échoué, veuillez réessayer ou cliquer sur 'Mot de passe oublié'.";
        insertAfter(errorMsgPassword, submitBtn);
      }
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });
};

// Fonction pour supprimer les messages d'erreur

const resetErrors = () => {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((errorMsg) => {
    errorMsg.remove();
  });
};

// fonction pour rediriger si infos ok

const handleSubmit = (e) => {
  e.preventDefault();
  resetErrors();
  let validate = true;
  verifyInfos();
  console.log(validate);
  if (validate) {
    sendInfos();
  }
};

//event listener

submitBtn.addEventListener("click", handleSubmit);
