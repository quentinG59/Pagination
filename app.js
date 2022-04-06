import fetchFollowers from "./utils/fetchFollowers.js";
import displayUser from "./utils/displayUser.js";
import paginate from "./utils/paginate.js";
import displayButtons from "./utils/displayButtons.js";

const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let index = 0;
let pages = [];
// Initialisation de de l'index a 0 pour afficher la page 1, chagement de l'index selon le buttons sur lequel je click.
const setupUI = () => {
  displayUser(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = "pagination";
  pages = paginate(followers);
  setupUI();
};

window.addEventListener("DOMContentLoaded", init);

btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("prev-btn")) {
    index--;

    if (index < 0) {
      index = pages.length - 1;
    }
  }

  if (e.target.classList.contains("next-btn")) {
    index++;

    if (index > pages.length - 1) {
      index = 0;
    }
  }

  if (e.target.classList.contains("page-btn")) {
    index = parseInt(e.target.dataset.index);
  }

  setupUI();
});
