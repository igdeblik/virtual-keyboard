export const creatKeyCap = (key) => {
    const defaultSize = 50;
    const keyCap = document.createElement('div');
    keyCap.className = 'keyboard-btn';
    keyCap.textContent = key.en[0];
    keyCap.style.width = `${defaultSize * (key.size || 1)}px`;
  
    return keyCap;
  }