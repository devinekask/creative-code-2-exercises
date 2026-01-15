const init = () => {
  const $picture = document.querySelector(`.image__picture`);
  const $path = document.querySelector(`.image__path`);

  // get the value of the attribute using getAttribute()
  $path.textContent = $picture.getAttribute(`src`);

  // set a new value using setAttribute
  //$picture.setAttribute(`src`,`https://media.giphy.com/media/13HgwGsXF0aiGY/source.gif`);

  // check if an attribute is present
  /*if(!$picture.hasAttribute(`alt`)){
    console.log(`damm, this will not be valid...`);
    // set an attribute that was not set before
    $picture.setAttribute(`alt`,`coder going crazy`);
  }*/
};

init();
