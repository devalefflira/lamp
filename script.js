//Constantes
const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');
//Funções
function lampOn () {
    if (!isLampBroken ()) {
        lamp.src = './Imagens/ligada.jpg';
    }
}
function lampOff () {
    if (!isLampBroken ()) {
        lamp.src = './Imagens/desligada.jpg';
    }
}
function lampBroken () {
    lamp.src = './Imagens/quebrada.jpg';
}
function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1;
}
//Eventos
turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);