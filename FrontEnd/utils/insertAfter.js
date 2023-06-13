// Function to insert an element after the targeted one
const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

export default insertAfter;
