const trafficLightEl = document.querySelector('#trafficLight'); //объявляю переменную trafficLightEl через поиск селектором trafficLight//


function makeGreen() { //объявляю функцию "makeGreen"
    trafficLightEl.style.background = ('green'); //переменная trafficLightEl со свойством style.background  задает цвет фона зеленым//
    trafficLightEl.removeEventListener('click', makeGreen); //следующий шаг - удалить событие по клику функцию "makeGreen"
    trafficLightEl.addEventListener('click', makeYellow); //следующий шаг - событие по клику вызвать функцию "makeYellow"
}


trafficLightEl.addEventListener('click', makeGreen); //запускаю функцию "makeGreen" по клику



function makeYellow() { //объявляю функцию "makeYellow"
    trafficLightEl.style.background = ('yellow'); //переменная trafficLightEl со свойством style.background  задает цвет фона желтым//
    trafficLightEl.removeEventListener('click', makeYellow); //следующий шаг - удалить событие по клику функцию "makeYellow"
    trafficLightEl.addEventListener('click', makeRed); // следующий шаг - событие по клику вызвать функцию "makeRed"
}

function makeRed() { //объявляю функцию "makeRed"
    trafficLightEl.style.background = ('red'); //переменная trafficLightEl со свойством style.background  задает цвет фона красным//
    trafficLightEl.removeEventListener('click', makeRed); //следующий шаг - удалить событие по клику функцию "makeRed"
    trafficLightEl.addEventListener('click', makeGreen); // следующий шаг - событие по клику вызвать функцию "makeGreen"
}