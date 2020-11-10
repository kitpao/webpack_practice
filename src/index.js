import _ from 'lodash';
import './style.css';
// import {myName, yourName} from './myName';
// import "./butterfly.jpeg";

function component() {
  const element = document.createElement('div');

  // Lodash is required for next line
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // customized module
  //element.innerHTML = myName('Kit') + ' and ' + yourName('Pao');

  return element;
}

document.body.appendChild(component());
