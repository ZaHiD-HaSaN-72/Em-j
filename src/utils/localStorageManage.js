export const addToDatabase = (producctId) => {
    try {
        let storeCart = getShoppingCart('ShoppingCart');

        let exist = false;
        for (let id in storeCart) {
            if (id == producctId) {
                exist = true;
                break;
            }
        }

        let newCart = { ...storeCart };
        if (exist) {
            newCart[producctId] = storeCart?.[producctId] + 1;

        }
        else {
            newCart[producctId] = 1;
        }

        setShoppingCart('ShoppingCart', newCart);
    } catch (error) {
        console.log(error);
    }

}

export const getShoppingCart = (key) => {
    let shoppingCart = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem(key);
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

export const setShoppingCart = (key, newCart) => {
    localStorage.setItem(key, JSON.stringify(newCart))
}

