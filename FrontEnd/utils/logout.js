// Fonction gérant la sortie du mode admin
const logout = () => {
  console.log("click");
  window.localStorage.clear();
  window.location.reload();
};

export default logout;
