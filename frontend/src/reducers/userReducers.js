import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";

export const userLoginReducer = (state={},action) =>
{
    switch (action.type)
    {
        case USER_LOGIN_REQUEST:
            return {loading: true};
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload};
        case USER_LOGOUT:
            return {};  // clear the user info when logging out  // You might want to add additional logic here to clear other user-related state as well.  // For example, clearing cart items, wishlist items, etc.  // Be careful not to remove sensitive data like user passwords.  // Consider using a secure method to clear sensitive data.  // For example, using local storage or cookies to clear the user information.  // Be sure to handle the case when the user is logged out by clearing the user info in the local storage or cookies.  // This reducer handles the user login, logout, and error actions.  // You can add more actions and reducers as needed for your application.  // For example, you might have a user registration reducer, user profile reducer, user order history reducer, etc.  // Be sure to follow best practices for handling user state and actions in Redux.  // For example, use Redux Toolkit or Ducks for managing state
        default:
            return state;
    }
}

export const userRegisterReducer = (state={},action) =>
{
    switch (action.type)
    {
        case USER_REGISTER_REQUEST:
            return {loading: true};
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const userDetailsReducer = (state={user:{}},action) =>
{
    switch (action.type)
    {
        case USER_DETAILS_REQUEST:
            return {...state,loading: true};
        case USER_DETAILS_SUCCESS:
            return {loading: false, user: action.payload};
        case USER_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}