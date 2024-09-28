const {
    ADD_TO_CART,
    ADD_TO_COMPARE,
    ADD_TO_FAVORITE,
    REMOVE_TO_FAVORITE,
    REMOVE_FROM_CART,
    REMOVE_TO_COMPARE,
    UPDATE_CART_QUANTITY,
} = require('./constants');
//Action cart
const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload,
});
const increaseCartQuantity = (payload) => ({
    type: UPDATE_CART_QUANTITY,
    payload,
});
const removeFromCart = (payload) => ({
    type: REMOVE_FROM_CART,
    payload,
});
//Action favourite
const addToFavorite = (payload) => ({
    type: ADD_TO_FAVORITE,
    payload,
});
const removeToFavorite = (payload) => ({
    type: REMOVE_TO_FAVORITE,
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
