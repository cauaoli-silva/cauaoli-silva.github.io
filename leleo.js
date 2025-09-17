const cor =  '#' + Math.floor(Math.random()*16777215).toString(16);
const butaocor = document.getElementById ('batao');
butaocor.addEventListener ('click', () => document.body.style.backgroundColor = cor);