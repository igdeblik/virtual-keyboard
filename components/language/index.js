export const createLanguage = () => {
    const info = document.createElement('div');
    const infoSystem = document.createElement('div');
    const infoChange = document.createElement('div');

    infoSystem.textContent = 'Клавиатура создана в операционной системе Mac OS';
    infoChange.textContent = 'Для переключения языка комбинация: Alt + Space';

    info.append(infoSystem, infoChange);
    info.className = 'info'

    return info;
}