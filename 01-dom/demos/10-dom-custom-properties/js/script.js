const $root = document.querySelector(':root');
let hue = getComputedStyle($root).getPropertyValue('--hue');
console.log(hue);

const setHue = (hue) => {
    $root.style.setProperty('--hue', hue);
}

const init = () => {
    setHue(20);
}

init();