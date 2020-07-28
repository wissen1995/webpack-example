const style = require('./style.css')
console.log(style)

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'webpack basic';
  element.className = 'box';
  return element;
}

document.body.appendChild(component());