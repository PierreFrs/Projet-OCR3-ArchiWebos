// fonction activant le bouton valider
const toggleValidateBtn = (validateBtn) => {
  const picturePlaceholder = document.querySelector(".picture-placeholder");
  const titleInput = document.getElementById("titre");
  const categoryInput = document.getElementById("categorie");
  if (picturePlaceholder.classList.contains("flex")) {
    validateBtn.classList.add("grey-button");
    validateBtn.classList.remove("green-button");
    validateBtn.disabled = true;
  } else if (
    picturePlaceholder.classList.contains("hidden") &&
    titleInput.value !== "" &&
    categoryInput.value !== ""
  ) {
    validateBtn.classList.remove("grey-button");
    validateBtn.classList.add("green-button");
    validateBtn.disabled = false;
  }
};

export default toggleValidateBtn;
