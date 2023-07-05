
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk'
import { CartReducer } from './Reducers/CartReducers';
import { productDetailsReducer } from './Reducers/ProductDetails';
import {productListReducer} from './Reducers/ProductReducers'

const initialstate ={};
const reducer =  combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer,
    cart: CartReducer,
})
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(reducer,
     initialstate,
     composeEnhancer(applyMiddleware(thunk)));


 export default store;
