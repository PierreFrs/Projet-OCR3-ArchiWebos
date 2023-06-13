import adminMode from "./adminMode.js";

// Fonction de vérification du localStorage pour la page index
const verifyLocalStorage = () => {
  const login = window.localStorage.getItem("login");
  const currentPage = window.location.pathname;
  console.log(currentPage);
  if (login === "success" && currentPage === "/FrontEnd/index.html") {
    adminMode();
  } else if (
    login === "success" &&
    currentPage === "/FrontEnd/pages/login.html"
  ) {
    window.location.replace("../index.html");
  }
};

export default verifyLocalStorage;
