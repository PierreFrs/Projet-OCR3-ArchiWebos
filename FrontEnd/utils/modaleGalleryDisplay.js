// modaleGalleryDisplay
const modaleGalleryDisplay = (list) => {
  const projectsList = list
    .map((project) => {
      const { id, imageUrl } = project;

      return `<div class="modale-gallery-item" id=${id}>
              <div class="modale-img-container">
                <img src="${imageUrl}" alt="" />
                <div class="trash-container">
                  <i
                    class="fa-sharp fa-regular fa-trash-can fa-2xs"
                    style="color: #ffffff"
                  ></i>
                </div>
              </div>
              <button class="edit">éditer</button>
            </div>`;
    })
    .join("");

  return projectsList;
};

export default modaleGalleryDisplay;
