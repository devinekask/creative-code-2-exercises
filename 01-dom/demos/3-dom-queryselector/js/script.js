const init = () => {
  // select the element that has a class title
  const $title = document.querySelector(`.title`);
  console.log($title);

  // select the first element that has the class movie__title
  const $movie = document.querySelector(`.movie__title`);
  console.log($movie);

  // selects the first hyperlink inside the first element with the class movie__title
  const $movieLink = document.querySelector(`.movie__title a`);
  console.log($movieLink);

  // select an element that does not exsist: returns the value null
  const $blanco = document.querySelector(`.something`);
  console.log($blanco);

  // selecting a element starting from another element instead of starting from document
  const $movies = document.querySelector(`.movies`);
  console.log($movies);

  const $movieTitle = $movies.querySelector(`.movie__title`);
  console.log($movieTitle);

  // shortcut
  const $movie3 = document.querySelector(`.movies`).querySelector(`.movie__title`);

  //const $movie4 = document.querySelector(`.movies .movie__title`);
  console.log($movie3);
};

init();
