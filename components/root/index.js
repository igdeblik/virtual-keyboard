import { createKeyBoard } from '../keyboard/index.js';
import { createLanguage } from '../language/index.js';
import { createTextArea } from '../textarea/index.js';

export const createDom = () => {
    const main = document.createElement('main');
    main.className = 'main';
    const container = document.createElement('div');
    container.className = 'container';
    container.id = 'container';
    const textarea = createTextArea();
    const keyboard = createKeyBoard();
    const info = createLanguage();
    
    container.append(keyboard);
    main.append(container, textarea);
    
    
    document.body.prepend(main, info);

    import ('../../service/keyPress.js')
  };