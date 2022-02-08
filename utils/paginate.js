const paginate = (followers) => {
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  const newFlolowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    const end = start + itemsPerPage;

    //fin-1
    return followers.slice(start, end);
  });

  return newFlolowers;
};

export default paginate;
