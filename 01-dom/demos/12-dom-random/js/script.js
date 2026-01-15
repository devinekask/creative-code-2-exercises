const $root = document.querySelector(":root");

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomHue = () => {
  const hue = randomNumber(0, 360);
  $root.style.setProperty("--hue", hue);
  console.log(hue);
};

const init = () => {
  setRandomHue();
  //setInterval(setRandomHue, 1000);
};

init();
