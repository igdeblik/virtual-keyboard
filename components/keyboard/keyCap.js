export const creatKeyCap = (key, option) => {
    const defaultSize = 50;
    const keyCap = document.createElement('div');
    keyCap.className = 'keyboard-btn';
    keyCap.textContent = key[option.lang][option.reg];
    keyCap.style.width = `${defaultSize * (key.size || 1)}px`;
    keyCap.id = key.code
  
    return keyCap;
  }