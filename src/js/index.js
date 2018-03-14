// import css dynamically
import '../css/main.scss';
import utils from './utils';

// test the console
console.log('hello world!');

// define some variables
let wrap;
let canvas;
let box;
let width = window.innerWidth;
let height = window.innerHeight;

// grab anything from the dom we may need
const cacheElements = () => {
  wrap = document.querySelector('.wrap');
};

// add things to the dom
const createElements = () => {
  canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  wrap.appendChild(canvas);

  box = document.createElement('div');
  box.className = 'box';
  wrap.appendChild(box);
};

// user is moving the mouse
const mousemove = (e) => {
  console.log(e.clientX, e.clientY);
};

// window resize will be called after delay
const resize = () => {
  width = window.innerWidth;
  height = window.innerHeight;
  console.log(`resizing to ${width},${height}`);
};

// it's good to use a debounced version so the resize function isn't called too fast
const debouncedResize = utils.debounce(resize, 250);

// setup listeners for the site
const addListeners = () => {
  document.addEventListener('mousemove', mousemove);
  window.addEventListener('resize', debouncedResize);
};

// update everything before rendering
const update = () => {

};

// animation loop
const render = () => {
  update();
  requestAnimationFrame(render);
};

// initialize the page
const init = () => {
  cacheElements();
  createElements();
  addListeners();
  render();
};

init();
