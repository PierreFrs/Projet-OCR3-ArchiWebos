import fetchWorks from "./fetchWorks.js";
import { filtersDOM } from "../app.js";

// Fonction créant les boutons de manière dynamique
const displayButtons = async () => {
  const list = await fetchWorks();
  const categories = [...new Set(list.map((project) => project.categoryId))];
  const buttons = ["Tous", ...categories];

  filtersDOM.innerHTML = buttons
    .map((button) => {
      let buttonText;
      switch (button) {
        case 1:
          buttonText = "Objets";
          break;
        case 2:
          buttonText = "Appartements";
          break;
        case 3:
          buttonText = "Hotels & restaurants";
          break;
        default:
          buttonText = "Tous";
      }
      return `<button class='filter-btn' data-id="${button}">${buttonText}</button>`;
    })
    .join("");

  // Permet au bouton "Tous" d'être actif par défault
  const tousBtn = document.querySelector("[data-id='Tous']");
  tousBtn.classList.add("active-filter-btn");
};

export default displayButtons;
