import React from 'react';
import { calculateTotal, getCurrencySymbol } from '../../utlities/utilities.js';
import { changeItemQuantity } from './cartSlice.js';

export const Cart = (props) => {
    const { cart, currencyFilter, dispatch } = props;

    const onInputChangeHandler = (name, input) => {
        //If bad value is entered
        if (input === '') {
            return;
        }

        //Otherwise, convert input to number and pass along to change the quantity of the given name and quantity 
        const newQuantity = Number(input);
        dispatch(changeItemQuantity(name, newQuantity)) 
    };

    //cart and currencyFilter slices render data
    const cartElements = Object.keys(cart).map(createCartItem);
    const total = calculateTotal(cart, currencyFilter);

    return (
        <div id="cart-container">
            <ul id="cart-items">{cartElements}</ul>
            <h3 className="total">
                Total{' '}
                <span className="total-value">
                    {getCurrencySymbol(currencyFilter)}
                    {total}
                    {currencyFilter}
                </span>
            </h3>
        </div>
    );

    function createCartItem(name) {
        const item = cart[name];

        if (item.quantity === 0) {
            return;
        }

        return (
            <li key={name}>
                <p>{name}</p>
                <select
                    className="item-quantity"
                    value={item.quantity}
                    onChange={(e) => {
                        onInputChangeHandler(name, e.target.value);
                    }}
                    >
                        {[...Array(100).keys()].map((_, index) => (
                            <option key={index} value={index}>
                                {index}
                            </option>
                        ))}
                    </select>
            </li>
        );
    }
};