var backgrounds = 28;
var chosen = Math.floor(Math.random() * backgrounds) + 1;

document.getElementsByTagName('body')[0].classList.add('body-' + chosen);