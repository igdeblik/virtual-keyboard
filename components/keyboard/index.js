import {creatKeyCap} from '../../components/keyboard/keyCap.js'
import {updateTextarea} from '../textarea/index.js'
import { getOptions } from '../../service/getOptions.js';
import keys from '../../data/keys.js';

const handleVirtualKeyboardClick = (container) => {

  container.addEventListener('mousedown', (e) => {
      const el = e.target;

      if(el.classList.contains('keyboard-btn')) {
          el.classList.add('active');
          updateTextarea(el.textContent);
      }
  })
  container.addEventListener('mouseup', (e) => {
      const el = e.target;

      if(el.classList.contains('keyboard-btn')) {
          el.classList.remove('active');
      }
  })
}

export const createKeyBoard = () => {
  const keyboard = document.createElement('div');
  const keyboardOptions = getOptions();
  keyboard.className = 'keyboard';
  keyboard.id = 'keyboard';

  Object.entries(keys).forEach(([key, value]) => {
    const line = document.createElement('div');
    line.className = `line ${key}`;
    line.append(...value.map(key => creatKeyCap(key, keyboardOptions)))
    keyboard.append(line);
  });

  handleVirtualKeyboardClick(keyboard);

  return keyboard;
}


const updateKeyBoard = () => {
  document.getElementById('keyboard').remove();

  document.getElementById('container').append(createKeyBoard());
}

document.addEventListener('newSettings', updateKeyBoard);