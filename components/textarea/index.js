export const textareaId = 'textarea';

export const updateTextarea = (e) => {
  const textarea = document.getElementById(textareaId);
  let value = textarea.value;
  if(e.code === 'Backspace') {
    value = value.slice(0, -1);
  } else {
   value += e.key;
}
textarea.value = value;
}

export const createTextArea = () => {
   const textarea =  document.createElement('textarea');
  textarea.className = 'textstring';
  textarea.id = textareaId;
  return textarea;
}