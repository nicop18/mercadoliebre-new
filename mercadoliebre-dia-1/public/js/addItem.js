window.addEventListener('load', function() {

    let addItemForm = document.getElementById("#add-cart")
    let quantity  = document.querySelector('input[name=quantity]');
    let productId = document.querySelector('input[name=productId]');

    addItemForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let quantityValue = quantityInput.value;

            if (quantityValue <= 0) {
                error.innerText = 'La cantidad debe ser mayor a 1';
            } else {
        axios({
                method: 'post',
                url: 'http://localhost:3000/api/items',
                data: {
                    quantity: quantity.value,
                    productId: productId.value
                }
            })
            .then(response => {
                if (response.status == '201') {
                    console.log(response)
                    window.location.assign('http://localhost:3000/users/cart') 
                } else {
                    console.log('Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }})

 
})