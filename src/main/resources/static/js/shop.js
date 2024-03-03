function addProduct(div) {
    let str = div.id;
    let last = str.length - 1;

    let help = 'number_' + str[last];
    let currentValue = parseInt(document.getElementById(help).textContent);

    document.getElementById('basketCount').textContent = String(parseInt(document.getElementById('basketCount').textContent) + 1);
    
    document.getElementById(help).textContent = String(currentValue + 1);
}

function removeProduct(div) {
    let str = div.id;
    let last = str.length - 1;

    let help = 'number_' + str[last];
    let currentValue = parseInt(document.getElementById(help).textContent);

    if (parseInt(document.getElementById('basketCount').textContent) > 0) {
        document.getElementById('basketCount').textContent = String(parseInt(document.getElementById('basketCount').textContent) - 1);
    }
    if (currentValue > 0) {
        document.getElementById(help).textContent = String(currentValue - 1);
    }
}

function sortByName() {
    var productList = document.getElementById('productList');

    var elementsWithClass = document.querySelectorAll('.product');
    var elementsWithoutClass = document.querySelectorAll(':not(.product)');

    elementsWithClass = Array.from(elementsWithClass);
    elementsWithoutClass = Array.from(elementsWithoutClass);
    
    elementsWithClass.sort(function(a, b) {
        var nameA = a.getAttribute('data-name');
        var nameB = b.getAttribute('data-name');
        return nameA.localeCompare(nameB);
    });
    
    for (var index = 0; index < elementsWithClass.length; index++) {
        var element = elementsWithClass[index];

        element.id = (index + 1) + '';
        
        document.getElementById('productList').appendChild(element);
    }

    for (var index = 0; index < elementsWithClass.length; index++) {
        if (elementsWithClass[index].getAttribute('data-name') === 'h') {
            document.querySelector('.heirloomTomatoName').id = 'name_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoName'));
            document.querySelector('.heirloomTomatoPrice').id = 'price_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoPrice'));
            document.querySelector('.heirloomTomatoGrown').id = 'grown_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoGrown'));
            document.querySelector('.heirloomTomatoPicture').id = 'picture_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoPicture'));

            document.querySelector('.heirloomTomatoMinusForm').id = 'minus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoMinusForm'));

            document.querySelector('.heirloomTomatoPlusForm').id = 'plus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoPlusForm'));

            document.querySelector('.heirloomTomatoNumber').id = 'number_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoNumber'));
        } else if (elementsWithClass[index].getAttribute('data-name') === 's') {
            document.querySelector('.sweetOnionName').id = 'name_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionName'));
            document.querySelector('.sweetOnionPrice').id = 'price_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionPrice'));
            document.querySelector('.sweetOnionGrown').id = 'grown_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionGrown'));
            document.querySelector('.sweetOnionPicture').id = 'picture_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionPicture'));

            document.querySelector('.sweetOnionMinusForm').id = 'minus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionMinusForm'));

            document.querySelector('.sweetOnionPlusForm').id = 'plus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionPlusForm'));

            document.querySelector('.sweetOnionNumber').id = 'number_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionNumber'));
        } else if (elementsWithClass[index].getAttribute('data-name') === 'o') {
            document.querySelector('.organicGingerName').id = 'name_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerName'));
            document.querySelector('.organicGingerPrice').id = 'price_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerPrice'));
            document.querySelector('.organicGingerGrown').id = 'grown_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerGrown'));
            document.querySelector('.organicGingerPicture').id = 'picture_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerPicture'));

            document.querySelector('.organicGingerMinusForm').id = 'minus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerMinusForm'));

            document.querySelector('.organicGingerPlusForm').id = 'plus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerPlusForm'));

            document.querySelector('.organicGingerNumber').id = 'number_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerNumber'));
        }
    }
}

function sortByPrice() {
    var productList = document.getElementById('productList');

    var elementsWithClass = document.querySelectorAll('.product');
    var elementsWithoutClass = document.querySelectorAll(':not(.product)');

    elementsWithClass = Array.from(elementsWithClass);
    elementsWithoutClass = Array.from(elementsWithoutClass);
    
    elementsWithClass.sort(function(a, b) {
    var priceA = parseInt(a.getAttribute('data-price'));
    var priceB = parseInt(b.getAttribute('data-price'));
    return priceA - priceB;
    });

    for (var index = 0; index < elementsWithClass.length; index++) {
        var element = elementsWithClass[index];

        element.id = (index + 1) + '';
        
        document.getElementById('productList').appendChild(element);
    }
    
    for (var index = 0; index < elementsWithClass.length; index++) {
        if (elementsWithClass[index].getAttribute('data-name') === 'h') {
            document.querySelector('.heirloomTomatoName').id = 'name_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoName'));
            document.querySelector('.heirloomTomatoPrice').id = 'price_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoPrice'));
            document.querySelector('.heirloomTomatoGrown').id = 'grown_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoGrown'));
            document.querySelector('.heirloomTomatoPicture').id = 'picture_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoPicture'));

            document.querySelector('.heirloomTomatoMinusForm').id = 'minus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoMinusForm'));

            document.querySelector('.heirloomTomatoPlusForm').id = 'plus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoPlusForm'));

            document.querySelector('.heirloomTomatoNumber').id = 'number_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoNumber'));
        } else if (elementsWithClass[index].getAttribute('data-name') === 's') {
            document.querySelector('.sweetOnionName').id = 'name_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionName'));
            document.querySelector('.sweetOnionPrice').id = 'price_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionPrice'));
            document.querySelector('.sweetOnionGrown').id = 'grown_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionGrown'));
            document.querySelector('.sweetOnionPicture').id = 'picture_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionPicture'));

            document.querySelector('.sweetOnionMinusForm').id = 'minus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionMinusForm'));

            document.querySelector('.sweetOnionPlusForm').id = 'plus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionPlusForm'));

            document.querySelector('.sweetOnionNumber').id = 'number_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionNumber'));
        } else if (elementsWithClass[index].getAttribute('data-name') === 'o') {
            document.querySelector('.organicGingerName').id = 'name_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerName'));
            document.querySelector('.organicGingerPrice').id = 'price_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerPrice'));
            document.querySelector('.organicGingerGrown').id = 'grown_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerGrown'));
            document.querySelector('.organicGingerPicture').id = 'picture_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerPicture'));

            document.querySelector('.organicGingerMinusForm').id = 'minus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerMinusForm'));

            document.querySelector('.organicGingerPlusForm').id = 'plus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerPlusForm'));

            document.querySelector('.organicGingerNumber').id = 'number_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerNumber'));
        }
    }
    
    }
    function sortDefault() {
        var productList = document.getElementById('productList');

        var elementsWithClass = document.querySelectorAll('.product');
        var elementsWithoutClass = document.querySelectorAll(':not(.product)');

        elementsWithClass = Array.from(elementsWithClass);
        elementsWithoutClass = Array.from(elementsWithoutClass);

        elementsWithClass.sort(function(a, b) {
            var indexA = parseInt(a.getAttribute('data-index'));
            var indexB = parseInt(b.getAttribute('data-index'));
            return indexA - indexB;
        });
        for (var index = 0; index < elementsWithClass.length; index++) {
        var element = elementsWithClass[index];

        element.id = (index + 1) + '';
        
        document.getElementById('productList').appendChild(element);
        }
    
        for (var index = 0; index < elementsWithClass.length; index++) {
        if (elementsWithClass[index].getAttribute('data-name') === 'h') {
            document.querySelector('.heirloomTomatoName').id = 'name_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoName'));
            document.querySelector('.heirloomTomatoPrice').id = 'price_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoPrice'));
            document.querySelector('.heirloomTomatoGrown').id = 'grown_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoGrown'));
            document.querySelector('.heirloomTomatoPicture').id = 'picture_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoPicture'));

            document.querySelector('.heirloomTomatoMinusForm').id = 'minus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoMinusForm'));

            document.querySelector('.heirloomTomatoPlusForm').id = 'plus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoPlusForm'));

            document.querySelector('.heirloomTomatoNumber').id = 'number_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.heirloomTomatoNumber'));
        } else if (elementsWithClass[index].getAttribute('data-name') === 's') {
            document.querySelector('.sweetOnionName').id = 'name_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionName'));
            document.querySelector('.sweetOnionPrice').id = 'price_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionPrice'));
            document.querySelector('.sweetOnionGrown').id = 'grown_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionGrown'));
            document.querySelector('.sweetOnionPicture').id = 'picture_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionPicture'));

            document.querySelector('.sweetOnionMinusForm').id = 'minus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionMinusForm'));

            document.querySelector('.sweetOnionPlusForm').id = 'plus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionPlusForm'));


            document.querySelector('.sweetOnionNumber').id = 'number_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.sweetOnionNumber'));
        } else if (elementsWithClass[index].getAttribute('data-name') === 'o') {
            document.querySelector('.organicGingerName').id = 'name_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerName'));
            document.querySelector('.organicGingerPrice').id = 'price_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerPrice'));
            document.querySelector('.organicGingerGrown').id = 'grown_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerGrown'));
            document.querySelector('.organicGingerPicture').id = 'picture_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerPicture'));

            document.querySelector('.organicGingerMinusForm').id = 'minus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerMinusForm'));

            document.querySelector('.organicGingerPlusForm').id = 'plus_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerPlusForm'));

            document.querySelector('.organicGingerNumber').id = 'number_' + (index + 1);
            document.getElementById('productList').appendChild(document.querySelector('.organicGingerNumber'));
        }
    }
    }




function resetButtonStyles() {
    var buttonsDiv = document.getElementById('buttons');

    if (buttonsDiv) {
        var buttons = buttonsDiv.getElementsByTagName('button');

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.color = 'black';
            buttons[i].style.backgroundColor = 'white';
            buttons[i].style.border = '1px solid rgb(194, 194, 194)';
            buttons[i].classList.remove('active');
        }
    }
}
function changeButtonStyle(button) {
    var buttonId = button.id;

    button.style.color = 'white';
    button.style.backgroundColor = '#426B1F';
    button.style.border = '0';

    button.classList.add('active');
}