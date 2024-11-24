import {legacy_createStore as createStore, combineReducers,applyMiddleware} from 'redux';       // createStore deprecated
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import { productDetailsReducer, productListReducer } from './reducers/productReducers.js';

const reducer = combineReducers(
    {
        productList:productListReducer,
        productDetails:productDetailsReducer,
    });

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;