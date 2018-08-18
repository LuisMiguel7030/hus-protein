import { ADD_CART_ITEM } from '../types.js';

export const addCartItem = item => ({
    type: ADD_CART_ITEM,
    item
});
