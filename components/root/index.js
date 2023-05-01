import keys from '../../data/keys.js';
import { createKeyBoard } from '../keyboard/index.js';
import { createTextArea } from '../textarea/index.js';
export const createDom = () => {
    const main = document.createElement('main');
    main.className = 'main';
    const container = document.createElement('div');
    container.className = 'container';
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    const textarea = createTextArea();
    
    main.append(container);
    container.append(keyboard);
   keyboard.append(textarea);
    
    createKeyBoard(keys, keyboard)
    document.body.prepend(main);
    
  };