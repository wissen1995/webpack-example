import './style.css'
import Maple from './fengye.jpg'
import printMe from './print'

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'webpack-basic';
  element.className = 'box';

  const img = new Image(100, 57);
  img.src = Maple;
  element.appendChild(img);

  const btn = document.createElement('button');
  btn.innerHTML = '点击按钮';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());