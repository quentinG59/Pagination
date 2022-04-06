const container = document.querySelector(".container");

const displayUser = (followers) => {
  //Pour parcourir mon tableau de followers et en ressortir les infos
  const newUsers = followers
    .map((follower) => {
      const { avatar_url, html_url, login } = follower;
      return `<article class="card"> <img src="${avatar_url}" alt="" />
    <h4>${login}</h4>
    <a href="${html_url}" class="btn">view profile</a>
    </article>`;
    })
    .join("");

  container.innerHTML = newUsers;
  console.log(newUsers);
};

export default displayUser;
