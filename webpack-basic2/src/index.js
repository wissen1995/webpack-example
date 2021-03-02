import './styles/index.css'
import Yasuo from '../assets/images/yasuo.jpeg'

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'webpack';
  element.className = 'box';

  const img = new Image(200, 100);
  img.src = Yasuo;
  element.appendChild(img);

  return element
}

document.body.appendChild(component());
