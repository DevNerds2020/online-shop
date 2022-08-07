import { ADD_ITEM, REMOVE_ITEM } from "../configs/shop"

const initialState = {
    products: [],
    cart: [],
    total: 0,
    cartTotal: 0,
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                products: [...state.products, action.payload],
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
                cartTotal: state.cartTotal + action.payload.price,
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload),
                cartTotal: state.cartTotal - action.payload.price,
            }
        case 'UPDATE_TOTAL':
            return {
                ...state,
                total: state.total + action.payload,
            }
        case 'UPDATE_CART_TOTAL':
            return {
                ...state,
                cartTotal: action.payload,
            }
        default:
            return state
    }
}
export default shopReducer;