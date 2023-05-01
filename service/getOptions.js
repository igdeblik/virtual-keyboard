import { updatesettingsEvent } from "./settings.js";

const defauptKeyboardOptions = {
    lang:'en',
    reg:0,
};


export const getOptions = () => {
    const settings = localStorage.getItem('keyboardOptions') ;
    return settings ? JSON.parse(settings) : defauptKeyboardOptions;
}
export const setOptions = (newOptions) => {
    const options = localStorage.setItem('keyboardOptions', JSON.stringify(
        {
            lang: newOptions.lang || getOptions().lang,
            reg: newOptions.reg || 0
        }
    ));
    document.dispatchEvent(updatesettingsEvent)
}