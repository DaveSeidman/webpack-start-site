import '../css/main.scss';

console.log('hello world!');
const wrap = document.querySelector('.wrap');

const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
wrap.appendChild(canvas);
