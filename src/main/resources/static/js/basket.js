function writeLbs(button) {
    var inputField = button.parentElement.querySelector('.text');
    
    // Очистка поля text
    inputField.textContent = '';
    
 // Выбор поля text для редактирования
 inputField.contentEditable = true;
 inputField.focus();
 
 // Сброс возможности редактирования после потери фокуса
 inputField.addEventListener('blur', function() {
     inputField.contentEditable = false;
 }, { once: true });
}
