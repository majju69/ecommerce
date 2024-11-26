import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS,ORDER_DELIVER_FAIL,ORDER_DELIVER_REQUEST,ORDER_DELIVER_RESET,ORDER_DELIVER_SUCCESS,ORDER_DETAILS_FAIL,ORDER_DETAILS_REQUEST,ORDER_DETAILS_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_MY_FAIL, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_RESET, ORDER_LIST_MY_SUCCESS, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_RESET, ORDER_PAY_SUCCESS } from "../constants/orderConstants";

export const orderCreateReducer=(state={},action)=>
{
    switch (action.type)
    {
        case ORDER_CREATE_REQUEST:
            return {loading: true};
        case ORDER_CREATE_SUCCESS:
            return {loading: false, success: true, order: action.payload};
        case ORDER_CREATE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const orderDetailsReducer=(state={loading:true,orderItems:[],shippingAddress:{}},action)=>
{
    switch (action.type)
    {
        case ORDER_DETAILS_REQUEST:
            return {...state,loading: true};
        case ORDER_DETAILS_SUCCESS:
            return {loading: false, order: action.payload};
        case ORDER_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const orderPayReducer=(state={},action)=>
{
    switch (action.type)
    {
        case ORDER_PAY_REQUEST:
            return {loading: true};
        case ORDER_PAY_SUCCESS:
            return {loading: false, success: true};
        case ORDER_PAY_FAIL:
            return {loading: false, error: action.payload};
        case ORDER_PAY_RESET:
            return {};  // Reset state to initial state when order is paid. This is important to prevent any user-specific data from being persisted between page refreshes.  // This is a common pattern in Redux.  // It's also a good idea to clear the order in the cart when the order is paid.  // This would require changes in the cart and order reducers.  // The cart and order reducers should be combined into a single reducer.  // The order reducer 
        default:
            return state;
    }
}

export const orderDeliverReducer=(state={},action)=>
{
    switch (action.type)
    {
        case ORDER_DELIVER_REQUEST:
            return {loading: true};
        case ORDER_DELIVER_SUCCESS:
            return {loading: false, success: true};
        case ORDER_DELIVER_FAIL:
            return {loading: false, error: action.payload};
        case ORDER_DELIVER_RESET:
            return {};  // Reset state to initial state when order is paid. This is important to prevent any user-specific data from being persisted between page refreshes.  // This is a common pattern in Redux.  // It's also a good idea to clear the order in the cart when the order is paid.  // This would require changes in the cart and order reducers.  // The cart and order reducers should be combined into a single reducer.  // The order reducer 
        default:
            return state;
    }
}

export const orderListMyReducer=(state={orders:[]},action)=>
{
    switch (action.type)
    {
        case ORDER_LIST_MY_REQUEST:
            return {loading: true};
        case ORDER_LIST_MY_SUCCESS:
            return {loading: false, orders: action.payload};
        case ORDER_LIST_MY_FAIL:
            return {loading: false, error: action.payload};
        case ORDER_LIST_MY_RESET:
            return {orders: []};  // Reset state to initial state when user logs out. This is important to prevent any user-specific data from being persisted between page refreshes.  // This is a common pattern in Redux.  // It's also a good idea to clear the order history when the user logs out.  // This would require changes in the order history and user reducers.  // The order history and user reducers should be combined into a single reducer.  // The order history reducer  // The user reducer  // The order history and user reducers should be combined into a single reducer.  // The order history reducer  // The user reducer  // The order history and user reducers should be combined into a single reducer.  // The order history reducer  // The user reducer  // The order history and user reducers should be combined into a single reducer.  // The order history reducer  // The user reducer  // The order history and
        default:
            return state;
    }
}

export const orderListReducer=(state={orders:[]},action)=>
{
    switch (action.type)
    {
        case ORDER_LIST_REQUEST:
            return {loading: true};
        case ORDER_LIST_SUCCESS:
            return {loading: false, orders: action.payload};
        case ORDER_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}