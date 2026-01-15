const init = () => {
  // creating an empty <p> tag
  const $subtitle = document.createElement(`p`);
  console.log($subtitle);

  // content is just text = use textContent
  $subtitle.textContent = `The best of cinema`;
  // content contains HTML = use innerHTML

  $subtitle.innerHTML = `The <em>best</em> of cinema`;

  // add classes if necessary
  $subtitle.classList.add(`header__subtitle`);
  console.log($subtitle);

  // attach element to the DOM
  // using appendChild : last element of the parent
  document.querySelector(`.header`).appendChild($subtitle);

  // using insertBefore: needs a second parameter
  // const $title = document.querySelector(`.header__title`);
  // document.querySelector(`.header`).insertBefore($subtitle,$title);
};

init();
