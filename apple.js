const cart = [];
let btnArray = document.querySelectorAll('.card-button')
btnArray = [...btnArray]

btnArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let { title, price } = e.target.dataset
        price = Number(price)
        const find = cart.find(item => item.title == title)
        if (find) {
            find.count++
        } else {
            cart.push({ title, price, count: 1 })
        }

        //=============Create HTML elements =======================//

        const cartContainer = document.querySelector('.cart-container')
        const cartElement = document.querySelector('.cart')
        cartElement.style.opacity = '1'

        const cartItem = document.createElement('div')
        cartItem.classList.add('cart-item')


        const cartItemTitle = document.createElement('div')
        cartItemTitle.classList.add('title')
        cartItemTitle.innerText = title

        const cartItemPrice = document.createElement('div')
        cartItemPrice.classList.add('price')
        cartItemPrice.innerText = price

        cartItem.appendChild(cartItemTitle)
        cartItem.appendChild(cartItemPrice)
        cartContainer.appendChild(cartItem)


        //=============Total price =======================//

        const totalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0)
        console.log(totalPrice)
        const totalPriceElement = document.querySelector('.total-price')
        totalPriceElement.innerText = totalPrice + '$'
    });
})





