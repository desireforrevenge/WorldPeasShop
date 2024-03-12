//7 days
// Cookies.set('heirloomTomatoCount', '1', { expires: 7 });
// Cookies.set('sweetOnionCount', '5', { expires: 7 });
// Cookies.set('organicGingerCount', '2', { expires: 7 });
// let wasReloaded = false;

window.onload = function() {
    // if (!isReloaded) {
    //     location.reload(true);
    //     isReloaded = true;
    // }

    document.getElementById('basketButtonText').textContent = Cookies.get('sumElementsInBasket');

    document.getElementById('text1').value = Cookies.get('heirloomTomatoCount');
    document.getElementById('text2').value = Cookies.get('sweetOnionCount');
    document.getElementById('text3').value = Cookies.get('organicGingerCount');

    document.getElementById('totalPrice1').textContent = '$' + (parseFloat(Cookies.get('heirloomTomatoCount')) * parseFloat(document.getElementById('productLbPrice1').textContent)).toFixed(2);
    document.getElementById('totalPrice2').textContent = '$' + (parseFloat(Cookies.get('sweetOnionCount')) * parseFloat(document.getElementById('productLbPrice2').textContent)).toFixed(2);
    document.getElementById('totalPrice3').textContent = '$' + (parseFloat(Cookies.get('organicGingerCount')) * parseFloat(document.getElementById('productLbPrice3').textContent)).toFixed(2);

    let total = parseFloat(document.getElementById('totalPrice1').textContent.substring(1)) + parseFloat(document.getElementById('totalPrice2').textContent.substring(1)) + parseFloat(document.getElementById('totalPrice3').textContent.substring(1));
    document.getElementById('subtotal').textContent = '$' + (total * 83 / 100).toFixed(2);
    document.getElementById('shipping').textContent = '$' + (total * 10.61 / 100).toFixed(2);
    document.getElementById('tax').textContent = '$' + (total * 6.39 / 100).toFixed(2);
    document.getElementById('total').textContent = '$' + total;

    let typeCount = 0;
    if (Cookies.get('heirloomTomatoCount') > 0) typeCount++;
    if (Cookies.get('sweetOnionCount') > 0) typeCount++;
    if (Cookies.get('organicGingerCount') > 0) typeCount++;

    document.getElementById('itemsTypeCount').textContent = typeCount;

    Cookies.set('sumElementsInBasket', parseInt(Cookies.get('heirloomTomatoCount')) + parseInt(Cookies.get('sweetOnionCount')) + parseInt(Cookies.get('organicGingerCount')), { expires: 7 });
  };

function changeValue(button) {
    var form = button.closest('form');
    var inputField = form.querySelector('input[type="text"]');
    if (inputField.id[inputField.id.length - 1] == 1) {
        Cookies.set('heirloomTomatoCount', inputField.value, { expires: 7 });
    } else if (inputField.id[inputField.id.length - 1] == 2) {
        Cookies.set('sweetOnionCount', inputField.value, { expires: 7 });
    } else if (inputField.id[inputField.id.length - 1] == 3) {
        Cookies.set('organicGingerCount', inputField.value, { expires: 7 });
    }
    

    form.elements['heirloomTomatoCount'].value = Cookies.get('heirloomTomatoCount');
    form.elements['sweetOnionCount'].value = Cookies.get('sweetOnionCount');
    form.elements['organicGingerCount'].value = Cookies.get('organicGingerCount');
    form.elements['sumElementsInBasket'].value = Cookies.get('sumElementsInBasket');
}