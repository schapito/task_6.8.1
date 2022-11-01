const trafficLight1 = document.querySelector('#trafficLight1'); //объявляю переменную trafficLight1 через поиск селектором trafficLight1//
const trafficLight2 = document.querySelector('#trafficLight2'); //объявляю переменную trafficLight2 через поиск селектором trafficLight2//
const trafficLight3 = document.querySelector('#trafficLight3'); //объявляю переменную trafficLight3 через поиск селектором trafficLight3//

function makeGreen() { //объявляю функцию "makeGreen"
    trafficLight1.style.background = ('green'); //переменная trafficLight1 со свойством style.background  задает цвет фона зеленым//
    trafficLight2.style.background = ('black'); //переменная trafficLight2 со свойством style.background  задает цвет фона черным//
    trafficLight3.style.background = ('black'); //переменная trafficLight3 со свойством style.background  задает цвет фона черным//
    trafficLight1.removeEventListener('click', makeGreen); //следующий шаг - удалить событие по клику функцию "makeGreen"//
    trafficLight2.removeEventListener('click', makeGreen);
    trafficLight3.removeEventListener('click', makeGreen);
    trafficLight1.addEventListener('click', makeYellow);
    trafficLight2.addEventListener('click', makeYellow);
    trafficLight3.addEventListener('click', makeYellow);
}

function makeYellow() { //объявляю функцию "makeYellow"
    trafficLight1.style.background = ('black'); 
    trafficLight2.style.background = ('yellow');
    trafficLight3.style.background = ('black');
    trafficLight1.removeEventListener('click', makeYellow);
    trafficLight2.removeEventListener('click', makeYellow);
    trafficLight3.removeEventListener('click', makeYellow);
    trafficLight1.addEventListener('click', makeRed);
    trafficLight2.addEventListener('click', makeRed);
    trafficLight3.addEventListener('click', makeRed);
}

function makeRed() { //объявляю функцию "makeRed"
    trafficLight1.style.background = ('black');
    trafficLight2.style.background = ('black');
    trafficLight3.style.background = ('red');
    trafficLight1.removeEventListener('click', makeRed);
    trafficLight2.removeEventListener('click', makeRed);
    trafficLight3.removeEventListener('click', makeRed);
    trafficLight1.addEventListener('click', makeGreen);
    trafficLight2.addEventListener('click', makeGreen);
    trafficLight3.addEventListener('click', makeGreen);
}

trafficLight1.addEventListener('click', makeGreen); //запускаю функцию "makeGreen" по клику
trafficLight2.addEventListener('click', makeYellow); //запускаю функцию "makeYellow" по клику
trafficLight3.addEventListener('click', makeRed); //запускаю функцию "makeRed" по клику