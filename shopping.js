const displayLocalstorageCart = () => {
    const items = getLocalstorage();
    for (const item in items) {
        displayItem(item);
    }
}

const addProduct = () => {
    const getInput = document.getElementById('input-item');
    const getInputValue = getInput.value;
    if (getInputValue === '') {
        return;
    }

    //show data
    displayItem(getInputValue);

    //local storage
    getLocalstorage();

    //add product to cart
    addCart(getInputValue);


    getInput.value = "";
}

const displayItem = name => {
    const ul = document.getElementById('added-item');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getLocalstorage = () => {
    const cart = localStorage.getItem('cart')
    let cartOBJ;
    if (cart) {
        cartOBJ = JSON.parse(cart)
    }
    else {
        cartOBJ = {};
    }
    return cartOBJ;
}

const addCart = name => {
    const cart = getLocalstorage();
    if(cart[name]){
        cart[name] = cart[name] + 1;
    }
    else{
        cart[name] = 1;
    }
    
    const values = JSON.stringify(cart);
    localStorage.setItem('cart', values)
}
displayLocalstorageCart();

const getProduct = () => {
    document.getElementById('added-item').textContent = "";
    localStorage.removeItem('cart');
}