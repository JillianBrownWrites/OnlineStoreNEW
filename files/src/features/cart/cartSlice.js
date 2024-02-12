export const addItem = (itemToAdd) => {
    return {
        type: 'cart/addItem',
        payload: itemToAdd,
    };
};

export const changeItemQuantity = (name, newQuantity) => {
    return {
        type: "cart/changeItemQuantity",
        payload: {
            name,
            newQuantity
        }
    }
}

const initialCart = {};
export const cartReducer = (cart = inititalCart, action) => {
    switch(action.type) {
        case 'cart/addItem': {
            const { name, price } = action.payload;

            //if item already is in cart, increase quantity by 1, otherwise set it to 1
            const quantity = cart[name] ? cart[name].quantity + 1 : 1;
            const newItem = { price, quantity };

            //add new item to cart (or replace if already there)
            return {
                ...cart,
                [name]: newItem
            };
        }
        case 'cart/changeItemQuantity': {
            const { name, newQuantity } = action.payload;
            const itemToUpdate = cart[name];

            //make copy of itemToUpdate and update quantity prop
            const updatedItem = {
                ...itemToUpdate,
                quantity: newQuantity
            };

            //Return copy of cart with updateItem included
            return {
                ...cart,
                [name]: updatedItem
            };
        }
        
        default: {
            return cart;
        }
    }
};