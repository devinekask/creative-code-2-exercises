const init = () => {
  // the <h1> element contains only text
  // textContent and innerHTML offer the same result
  const $title = document.querySelector(`.title`);
  console.log($title.textContent);
  console.log($title.innerHTML);

  // adjust using textContent: you can only use plain text
  //$title.textContent = `My favourite movies`;

  // adjust using innerHTML: you can add more tags
  //$title.innerHTML = `<em>My</em> favourite movies`;

  // the element <ol class="movies"> has multiple child elements
  // textContent only shows the text
  // innerHTML also shows the HTML tags and attributes as plain text
  const $movies = document.querySelector(`.movies`);
  console.log($movies.textContent);
  console.log($movies.innerHTML);

  // adjust using textContent: tags are not rendered
  //$movies.textContent = `<li class="movie__title">citizen kane</li><li class="movie__title">the wizard of oz</li>`;

  // adjust using innerHTML: HTML tags are rendered
  //$movies.innerHTML = `<li class="movie__title">citizen kane</li><li class="movie__title">the wizard of oz</li>`;
};

init();
