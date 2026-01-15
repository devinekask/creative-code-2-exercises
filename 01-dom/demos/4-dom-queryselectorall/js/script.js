const init = () => {
  // selecting all elements that have the class title (only 1 element in the HTML)
  // this return a NodeList with 1 element
  const $title = document.querySelectorAll(`.title`);
  console.log($title);

  // selecting all elements that have a class movie__title
  const $movies = document.querySelectorAll(`.movie__title`);
  console.log($movies);

  // selecting an element that does not exist: return an empty list
  const $blanco = document.querySelectorAll(`.something`);
  // console.log($blanco);

  // a NodeList is not an array, although you can use the forEach method
  $movies.forEach($movie => {
    console.log($movie);
  });

  // use Array.from to convert the NodeList to an array so you can use map() and filter()
  const list = Array.from($movies).map($movie => $movie.textContent).join(`;`);
  console.log(list);
};

init();
