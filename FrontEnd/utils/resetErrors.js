// Fonction pour supprimer les messages d'erreur

const resetErrors = () => {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((errorMsg) => {
    errorMsg.remove();
  });
};

export default resetErrors;
