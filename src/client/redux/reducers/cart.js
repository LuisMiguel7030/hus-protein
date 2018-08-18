import { ADD_CART_ITEM } from '../types.js';

const initialState = {
    cartList: []
};

export default function CartReducers(state = initialState, action) {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                ...state,
                cartList: [ ...state.cartList, action.item ]
            };

        default:
            return state;
    }
}
