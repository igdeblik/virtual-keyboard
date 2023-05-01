import { textareaId } from "../components/textarea/index.js";
import { updateTextarea } from '../components/textarea/index.js'
import { getOptions, setOptions } from "./getOptions.js";

const unHandlingButtons = ['Tab', 'ShiftLeft', 'ShiftRight', 'MetaLeft', 'MetaRight', 'Control', 'AltLeft', 'AltRight', 'CapsLock'];

const checkIsNeedUpdate = (e) => {
    if (e.target.closest(`#${textareaId}`)) return false
    return !unHandlingButtons.includes((e.code));
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Tab') e.preventDefault();

    if(e.code === "CapsLock" || e.code === "ShiftLeft" || e.code === "ShiftRight") {
            setOptions({reg: 1})
    }

    if (!e.repeat) {
        const activeBtn = document.getElementById(e.code);
        activeBtn.classList.add('active');
    }

    if(e.code === "Space" && e.altKey) {
        const options = getOptions();
        setOptions({
            lang: options.lang === 'en' ? 'ru' : 'en'
        })
    }

})


document.addEventListener('keyup', (e) => {
    const activeBtn = document.getElementById(e.code);
    activeBtn.classList.remove('active');

    if (checkIsNeedUpdate(e)) updateTextarea(e);

    if(e.code === "CapsLock" || e.code === "ShiftLeft" || e.code === "ShiftRight") {
        setOptions({reg: 0})
    }


});