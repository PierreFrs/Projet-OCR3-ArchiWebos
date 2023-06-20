// fonction activant le bouton valider
const toggleValidateBtn = (validateBtn) => {
  validateBtn.disabled = !validateBtn.disabled;
  validateBtn.classList.toggle("grey-button");
  validateBtn.classList.toggle("green-button");
};

export default toggleValidateBtn;
