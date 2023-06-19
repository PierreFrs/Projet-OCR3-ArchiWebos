const logout = () => {
  console.log("click");
  window.localStorage.clear();
  window.location.reload();
};

export default logout;
