const turnOn = document.getElementById('turnOn');
const turnOf = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function islampbroken() {
    return lamp.src.indexOf('quebrada') > -1

}

function lampOn() {
    if (!islampbroken())
        lamp.src = './img/ligada.jpg'
}
function lampOff() {
    if (!islampbroken())
        lamp.src = './img/desligada.jpg'
}
function lampBroken() {
    if (!islampbroken())
        lamp.src = './img/quebrada.jpg'
}
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);