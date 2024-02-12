import { createStore, combineReducers } from 'redux';
import { inventoryReducer } from '../features/inventory/inventorySlice.js';
import { cartReducer } from '../features/cart/cartSlice.js';
import { currencyFilterReducer } from '../featurescurrencyFilter/currencyFilterSlice.js';

//Create and export store 
export const store = createStore (
    combineReducers({
        inventory: inventoryReducer,
        cart: cartReducer, 
        currencyFilter: currencyFilterReducer
    }));