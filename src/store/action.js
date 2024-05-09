const {
    ADD_TO_CART,
    ADD_TO_COMPARE,
    ADD_TO_FAVOURITE,
    REMOVE_TO_FAVOURITE,
    REMOVE_FROM_CART,
    REMOVE_TO_COMPARE,
    UPDATE_CART_QUANTILY,
} = require('./constants');
//Action cart
const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload,
});
const increaseCartQuantity = (payload) => ({
    type: UPDATE_CART_QUANTILY,
    payload,
});
const removeFromCart = (payload) => ({
    type: REMOVE_FROM_CART,
    payload,
});
//Action favourite
const addToFavorite = (payload) => ({
    type: ADD_TO_FAVOURITE,
    payload,
});
const removeToFavorite = (payload) => ({
    type: REMOVE_TO_FAVOURITE,
    payload,
});
//Action compare
const addToCompare = (payload) => ({
    type: ADD_TO_COMPARE,
    payload,
});
const removeToCompare = (payload) => ({
    type: REMOVE_TO_COMPARE,
    payload,
});
export {
    addToCart,
    removeFromCart,
    addToFavorite,
    removeToFavorite,
    addToCompare,
    removeToCompare,
    increaseCartQuantity,
};
