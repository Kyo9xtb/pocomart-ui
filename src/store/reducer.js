import {
    ADD_TO_CART,
    ADD_TO_COMPARE,
    ADD_TO_FAVORITE,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    REMOVE_TO_COMPARE,
    REMOVE_TO_FAVORITE,
} from './constants';

const initState = {
    Carts: [],
    Favorites: [],
    Compares: [],
};
const storageCarts = JSON.parse(localStorage.getItem('Carts-POCOMART'));
initState.Carts = storageCarts ?? [];
const storageFavorites = JSON.parse(localStorage.getItem('Favourites-POCOMART'));
initState.Favorites = storageFavorites ?? [];
const storageCompares = JSON.parse(localStorage.getItem('Compares-POCOMART'));
initState.Compares = storageCompares ?? [];
function reducer(state, action) {
    switch (action.type) {
        //Action Cart
        case ADD_TO_CART:
            const { sale, price, quantily } = action.payload;
            action.payload.total = sale ? price * (1 - sale / 100) * quantily : price * quantily;
            let newAddToCart = [...state.Carts, action.payload];
            localStorage.setItem('Carts-POCOMART', JSON.stringify(newAddToCart));
            return {
                ...state,
                Carts: newAddToCart,
            };
        case UPDATE_CART_QUANTITY:
            const listUpdate = state.Carts.map((item) => {
                if (item.id === action.payload.id) {
                    item = action.payload;
                    const { sale, price, quantily } = item;
                    item.total = sale !== 0 ? price * (1 - sale / 100) * quantily : price * quantily;
                }
                return item;
            });
            localStorage.setItem('Carts-POCOMART', JSON.stringify(listUpdate));
            return {
                ...state,
                Carts: listUpdate,
            };
        case REMOVE_FROM_CART:
            const newRemoveCart = state.Carts.filter((product) => {
                return product.id !== Number(action.payload);
            });
            localStorage.setItem('Carts-POCOMART', JSON.stringify(newRemoveCart));
            return {
                ...state,
                Carts: newRemoveCart,
            };
        //Action Favourite
        case ADD_TO_FAVORITE:
            let newAddToFavourite = [...state.Favorites, action.payload];
            localStorage.setItem('Favourites-POCOMART', JSON.stringify(newAddToFavourite));
            return {
                ...state,
                Favourites: newAddToFavourite,
            };
        case REMOVE_TO_FAVORITE:
            const newRemoveFavourites = state.Favorites.filter((product) => {
                return product.id !== Number(action.payload.id);
            });
            localStorage.setItem('Favourites-POCOMART', JSON.stringify(newRemoveFavourites));
            return {
                ...state,
                Favourites: newRemoveFavourites,
            };
        //Action Compare
        case ADD_TO_COMPARE:
            let newAddToCompare = [...state.Compares, action.payload];
            localStorage.setItem('Compares-POCOMART', JSON.stringify(newAddToCompare));
            return {
                ...state,
                Compares: newAddToCompare,
            };
        case REMOVE_TO_COMPARE:
            const newRemoveCompare = state.Compares.filter((product) => {
                return product.id !== Number(action.payload.id);
            });
            localStorage.setItem('Compares-POCOMART', JSON.stringify(newRemoveCompare));
            return {
                ...state,
                Compares: newRemoveCompare,
            };
        default:
            throw new Error('Invalid actions');
    }
}

export default reducer;
export { initState };
