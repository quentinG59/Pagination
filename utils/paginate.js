const paginate = (followers) => {
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  // Math.ceil arrondir au dessus
  const newFlolowers = Array.from({ length: numberOfPages }, (_, index) => {
    // Array.from sert a faire une copie de mon tableau
    //* Stat/end sert a definir a quel indexs commence et fini chaque pages
    const start = index * itemsPerPage;
    const end = start + itemsPerPage;

    //fin-1 followers.slice copie de tableau avec un début et une fin
    return followers.slice(start, end);
  });

  return newFlolowers;
};

export default paginate;
