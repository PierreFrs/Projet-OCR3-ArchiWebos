import fetchWorks from "./fetchWorks.js";
import { displayGallery } from "./displayGallery.js";

const filterProjects = async (e) => {
  const el = e.target;
  const list = await fetchWorks();
  let filteredProjects;
  if (el.classList.contains("filter-btn")) {
    if (el.dataset.id === "Tous") {
      filteredProjects = list;
    } else {
      filteredProjects = list.filter((project) => {
        return project.categoryId === parseInt(el.dataset.id);
      });
    }
    displayGallery(filteredProjects);
  }
  changeFilterButtonColor(el);
};

const changeFilterButtonColor = (el) => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.classList.remove("active-filter-btn");
  });
  el.classList.add("active-filter-btn");
};

export { filterProjects, changeFilterButtonColor };
