import { createStore, applyMiddleware, compose } from 'redux'
import itemReducer from './items/itemReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(itemReducer, composeEnhancers(
        applyMiddleware(thunk)
));


export default store