//Объявление трех переменных//
const input = document.querySelector('input') //поле ввода//
const button = document.querySelector('button') //кнопка//
const duplicateField = document.querySelector('#duplicateField') // поле ввода текста в <p> по селектору //


input.addEventListener('input', function (event) { //вводим текст в поле //
    event.preventDefault();
    duplicateField.textContent = input.value; //текст дублируется в в блок duplicateField//
})


button.addEventListener('click', function (event) { //при нажатии кнопки текст, написанный из input, появляется в консоли, поле ввода(input) и duplicateField очищаются//
    console.log(input.value)
    input.value = "";
    duplicateField.textContent = "";
})