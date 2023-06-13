import fetchWorks from "./fetchWorks.js";
import { filtersDOM } from "../app.js";

// Fonction créant les boutons de manière dynamique

const displayButtons = async () => {
  const list = await fetchWorks();
  const buttons = [
    "Tous",
    ...new Set(list.map((project) => project.categoryId)),
  ];
  filtersDOM.innerHTML = buttons
    .map((button) => {
      return `<button class='filter-btn' data-id="${button}">${
        button === 1
          ? "Objets"
          : button === 2
          ? "Appartements"
          : button === 3
          ? "Hotels & restaurants"
          : "Tous"
      }</button>`;
    })
    .join("");
};

export default displayButtons;
