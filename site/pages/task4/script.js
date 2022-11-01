const currentUrl = document.querySelector('#currentUrl'); //Объявляю переменную currentUrl через поиск в документе по селектору #currentUrl'//
currentUrl.onclick = function(event){ //по клику на объект currentUrl вызывается функция 
const newUrl = prompt('Введите новый текст для ссылки'); //объявляется переменная newUrl, которая равна всплывающей функции prompt, где необходимо ввести аргумент в поле //
currentUrl.textContent = newUrl; //переменная currentUrl перезаписывается с помощью .textContent на новую ссылку newUrl//
event.preventDefault()} //предотвращает действие с нажатием ссылки "по дефолту"//