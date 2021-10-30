// let sec2 = document.querySelector('#Section2');
// let g3 = sec2.firstElementChild.querySelector('.group3');
// g3.innerHTML = '<li class="group3" style="color: red;">3</li>';
// g3.textContent = '3';

let tagImport = document.createElement('style');
document.head.appendChild(tagImport);
tagImport.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');`;

const sec2g3 = document.querySelector('#Section2 .group3')
sec2g3.textContent = 'Hello World!! We are Sec2G3'
sec2g3.style.cssText = `color : red; font-family: 'Josefin Sans', sans-serif; font-size: 3em;`;
