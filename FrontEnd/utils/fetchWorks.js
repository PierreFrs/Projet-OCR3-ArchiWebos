const url = "http://localhost:5678/api/works";

// Fonction récupérant les travaux via l'API
const fetchWorks = async () => {
  const response = await fetch(url);
  const list = await response.json();
  return list;
};

export default fetchWorks;
