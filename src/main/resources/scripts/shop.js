    

        function sortByName() {
            var productList = document.getElementById('productList');
            
            var items = productList.getElementsByClassName('product');
            
            items = Array.from(items);
            
            items.sort(function(a, b) {
                var nameA = a.getAttribute('data-name').toUpperCase();
                var nameB = b.getAttribute('data-name').toUpperCase();
                return nameA.localeCompare(nameB);
            });
            
            items.forEach(function(item) {
                productList.appendChild(item);
            });
        }
        function sortByPrice() {
            var productList = document.getElementById('productList');
            
            var items = productList.getElementsByClassName('product');
            
            items = Array.from(items);
            
            items.sort(function(a, b) {
            var priceA = parseInt(a.getAttribute('data-price'));
            var priceB = parseInt(b.getAttribute('data-price'));
            return priceA - priceB;
            });
            
            items.forEach(function(item) {
            productList.appendChild(item);
            });
            }
        function sortDefault() {
            var productList = document.getElementById('productList');
            
            var items = productList.getElementsByClassName('product');
            
            items = Array.from(items);
            
            items.sort(function(a, b) {
            var indexA = parseInt(a.getAttribute('data-index'));
            var indexB = parseInt(b.getAttribute('data-index'));
            return indexA - indexB;
            });
            
            items.forEach(function(item) {
            productList.appendChild(item);
            });
        }
        
        
        
        function resetButtonStyles() {
            var buttonsDiv = document.getElementById('buttons');
        
            if (buttonsDiv) {
                var buttons = buttonsDiv.getElementsByTagName('button');
        
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].style.color = 'black';
                    buttons[i].style.backgroundColor = 'white';
                }
            }
        }
        function changeButtonStyle(button) {
                    var buttonId = button.id;
        
                    button.style.color = 'white';
                    button.style.backgroundColor = '#426B1F';
                }