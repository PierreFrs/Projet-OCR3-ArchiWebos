import adminMode from "./adminMode.js";

// Fonction de vérification du localStorage pour gérer le mode admin
const verifyLocalStorage = () => {
  const userId = window.localStorage.getItem("userId");
  const authToken = window.localStorage.getItem("token");
  const currentPage = window.location.pathname;

  if (userId && authToken && currentPage === "/FrontEnd/index.html") {
    adminMode();

    const loginBtn = document.querySelector(".login-li");
    const logoutBtn = document.getElementById("logout-btn");
    loginBtn.classList.toggle("hidden");
    logoutBtn.classList.toggle("hidden");
  } else if (
    userId &&
    authToken &&
    currentPage === "/FrontEnd/pages/login.html"
  ) {
    window.location.replace("../index.html");
  }
};

export default verifyLocalStorage;
