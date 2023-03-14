const addToShopingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', ()=> console.log('click'));
});

const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer');

function addToCartClicked(event){
    const button = event.target;
    const item = button.closest('.item');

    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;

addItemToShoppingCart(itemTitle,itemPrice,itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = ``
}