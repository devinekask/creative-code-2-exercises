const init = () => {
  // selects the first element that has a class movies (only 1 in the document)
  const $movies = document.querySelector(`.movies`);

  // selects the first listitem
  console.log($movies.firstChild);

  // selects the last listitem
  console.log($movies.lastElementChild);

  // selects the parent element. In this case the <body> element
  console.log($movies.parentNode);

  // selects the next element at the same level. In this case the <ul> element
  console.log($movies.nextElementSibling);

  // selects the previous element at the same level. In this case the <h1> element
  console.log($movies.previousElementSibling);

  // select all child elements
  console.log($movies.children);
};

init();
