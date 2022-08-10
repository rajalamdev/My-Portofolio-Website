import { themeBtn, themeMobileBtn } from "./variable.mjs";

let lightMode = localStorage.getItem('light');

if(lightMode === 'enabled'){
    enableLightMode();
}

function enableLightMode() {
    document.body.classList.add('light');
    lightMode = localStorage.setItem('light', 'enabled');
    try {
        themeBtn.src = 'assets/img/icons-sun.webp';
        themeMobileBtn.src = 'assets/img/icons-sun.webp';
    } catch (error) {
        return error;
    }
};

function disableLightMode() {
    document.body.classList.remove('light');
    lightMode = localStorage.setItem('light', null);
    themeBtn.src = 'assets/img/icons-moon.webp';
    themeMobileBtn.src = 'assets/img/icons-moon.webp';
}

export { enableLightMode, disableLightMode };