const consoleLog = document.querySelector('#consoleLog'); //Объявляю переменную consoleLog и провожу поиск по серектору #consoleLog в документе //
consoleLog.addEventListener('click', function() { //Регистрирую обработчик события переменной consoleLog. type='click', функция Alert определенным текстом//
 alert('Служит для вывода информации в консоль')
});

document.querySelector('#Alert').addEventListener('click', function() { //Тоже самое, но без объявления переменной //
 alert('Показывает диалоговое окно с сообщением и кнопкой OK')});

document.querySelector('#Prompt').addEventListener('click',() => { //() => это тоже самое, когда нет необходимости называть функцию //
 alert('Отображает диалоговое окно с запросом на ввод текста')});