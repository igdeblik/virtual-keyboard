const enKeys = [
  ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
  ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
  ['Ctrl', 'Alt', 'Cmd', ' ', 'Cmd', 'Alt', '←', '↑', '→', '↓'],
];
const lines = ['line-one', 'line-second', 'line-three', 'line-four', 'line-five', 'line-six'];

const createDom = () => {
  const main = document.createElement('main');
  main.className = 'main';
  const container = document.createElement('div');
  container.className = 'container';
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  const textarea = document.createElement('textarea');
  textarea.className = 'textstring';
  const oneLine = document.createElement('div');
  oneLine.className = 'line line-one';
  const twoLine = document.createElement('div');
  twoLine.className = 'line line-second';
  const threeLine = document.createElement('div');
  threeLine.className = 'line line-three';
  const fourLine = document.createElement('div');
  fourLine.className = 'line line-four';
  const fiveLine = document.createElement('div');
  fiveLine.className = 'line line-five';
  const sixLine = document.createElement('div');
  sixLine.className = 'line line-six';
  document.body.prepend(main);
  document.querySelector('.main').append(container);
  document.querySelector('.container').append(keyboard);
  document.querySelector('.keyboard').append(textarea);
  document.querySelector('.keyboard').append(oneLine);
  document.querySelector('.keyboard').append(twoLine);
  document.querySelector('.keyboard').append(threeLine);
  document.querySelector('.keyboard').append(fourLine);
  document.querySelector('.keyboard').append(fiveLine);
  document.querySelector('.keyboard').append(sixLine);
};
const initKeys = () => {
  for (let i = 0; i < enKeys.length; i += 1) {
    for (let j = 0; j < enKeys[i].length; j += 1) {
      const keyboardsButton = document.createElement('div');
      keyboardsButton.innerHTML = enKeys[i][j];
      keyboardsButton.className = 'keyboard-btn';
      keyboardsButton.dataset.key = enKeys[i][j];
      document.querySelector(`.${lines[i]}`).append(keyboardsButton);
    }
  }
};

createDom();
initKeys();
