import { creatKeyCap } from "./keyUp.js";

export const createKeyBoard = (data, container) => {
  Object.entries(data).forEach(([key, value]) => {
    const line = document.createElement('div');
    line.className = `line ${key}`;
    line.append(...Object.values(value).map(key => creatKeyCap(key)))
    container.append(line)
  });
}
