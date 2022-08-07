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
            let product = state.products.find(product => product.id === action.item.id)
            if (product) {
                product.count += 1
            } else {
                return {
                    ...state,
                    products: [...state.products, { ...action.item, count: 1 }],
                }
            }
        case REMOVE_ITEM:
            product = state.products.find(product => product.id === action.id)
            if (product && product.count > 1) {
                product.count -= 1
            } else {
                return {
                    ...state,
                    products: state.products.filter(item => item.id !== action.id),
                }
            }
        default:
            return state
    }
}
export default shopReducer;