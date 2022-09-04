import * as Var from "./variable.mjs";

let lightMode = localStorage.getItem('light');

if(lightMode == 'enabled'){
    enableLightMode();
}

function enableLightMode() {
    lightMode = localStorage.setItem('light', 'enabled');
    Var.body.className = 'light';
    try {
        Var.themeBtn.src = 'assets/img/icons-sun.webp';
        Var.themeMobileBtn.src = 'assets/img/icons-sun.webp';
    } catch (error) {
        return error;
    }
};

function disableLightMode() {
    lightMode = localStorage.setItem('light', null);
    Var.body.className = 'dark';
    Var.themeBtn.src = 'assets/img/icons-moon.webp';
    Var.themeMobileBtn.src = 'assets/img/icons-moon.webp';
}

export { enableLightMode, disableLightMode };