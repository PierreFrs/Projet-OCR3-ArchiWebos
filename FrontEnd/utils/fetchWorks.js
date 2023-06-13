const url = "http://localhost:5678/api/works";
// Fonction récupérant les travaux via l'API
const fetchWorks = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchWorks;
