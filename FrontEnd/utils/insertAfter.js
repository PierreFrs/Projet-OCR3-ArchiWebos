// Fonction permettant l'insertion d'un élément du DOM juste après celui visé
const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

export default insertAfter;
