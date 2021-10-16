
const getDb = () => localStorage.getItem('shopping_cart');


const addToDb = (id) => {

    const exits = getDb();

    let shopping_cart = {};

    if (!exits) {
        shopping_cart[id] = 1
    } else {

        shopping_cart = JSON.parse(exits);

        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else {
            shopping_cart[id] = 1
        }
    }

    updateDB(shopping_cart);
}


const updateDB = (cart) => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart))
}


const removeDb = (id) => {
    const exits = getDb();
    if (!exits) {

    } else {
        const shopping_cart = JSON.parse(exits);
        delete shopping_cart[id];
        updateDB(shopping_cart);
    }
}

const getStoredCart = () => {
    const exits = getDb();
    return exits ? JSON.parse(exits) : {};
}

const clearCart = () => {
    localStorage.removeItem("shopping_cart");
}

export { addToDb, removeDb, getStoredCart, clearCart }

