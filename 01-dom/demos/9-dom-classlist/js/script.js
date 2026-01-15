const init = () => {
  const $title = document.querySelector(`.title`);
  // is empty becaus there is no inline CSS
  console.log($title.style);

  // add a new class to the $title element
  // NOTE: no dot before the classname. It is not a selector!
  $title.classList.add(`title--blue`);

  // check is a certain class is set
  if ($title.classList.contains(`title--blue`)) {
    // overview of all the classes
    console.log($title.classList);
    // loop over the classes using forEach
    $title.classList.forEach((item) => console.log(item));
  }

  // remove a class
  //$title.classList.remove(`title`);

  //toggle a class (add if not present, remove if present)
  /*   setInterval(() => {
    $title.classList.toggle(`title--blue`);
  }, 1000); */
};

init();
