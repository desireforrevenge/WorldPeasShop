function writeLbs(clickedElement) {
    var textField = clickedElement.querySelector('.text');

    // Очищаем поле
    textField.textContent = '';

    // Делаем текстовое поле редактируемым
    textField.contentEditable = true;

    // Устанавливаем курсор в начало текста
    var range = document.createRange();
    range.selectNodeContents(textField);
    range.collapse(true);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}