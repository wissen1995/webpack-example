import { cube } from './math'

function component() {
  let element = document.createElement('div');
  element.innerHTML = 'square' + cube(5);
  return element;
}

document.body.appendChild(component());