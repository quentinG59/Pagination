// Affichage des buttons pour chaque page avec index +1 pour la page 0.
const displayButtons = (container, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${
      // Classe active pour montrer sur quel page je suis.
      activeIndex === pageIndex ? "active-btn" : ""
    }"data-index="${pageIndex}">${pageIndex + 1}</button>`;
  });
  // Pour que le button next soit a droit
  btns.push("<button class ='next-btn'>next</button>");
  //pour que le button soit a gauche
  btns.unshift("<button class ='prev-btn'>prev</button>");

  container.innerHTML = btns.join("");
};

export default displayButtons;
