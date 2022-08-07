import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

const composeEnhancers = composeWithDevTools({
    name: 'jobb',
})

const createMyStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware())
    )

    return store
}

export default createMyStore