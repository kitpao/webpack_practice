// import _ from 'lodash';
import {myName, yourName} from './myName';

function component() {
  const element = document.createElement('div');

  // Lodash is required for next line
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // customized module
  element.innerHTML = myName('Kit') + ' and ' + yourName('Pao');

  return element;
}

document.body.appendChild(component());