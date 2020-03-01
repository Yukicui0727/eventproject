import * as ShoppingCartAction from '../actions/shopping-cart.action';
export const initialState = JSON.parse(localStorage.getItem('items')) || [];
export function shoppingCartReducer(state = initialState, action) {
    let index;
    switch (action.type) {
        case ShoppingCartAction.ActionTypes.AddItem:
            index = findInCart(state, action.payload);
            if (index !== -1) {
                state[index].qty++;
            }
            else {
                state.push(action.payload);
            }
            updateLocalStorage(state);
            return [...state];
        case ShoppingCartAction.ActionTypes.SetItem:
            index = findInCart(state, action.payload);
            state[index].qty = action.payload.qty;
            updateLocalStorage(state);
            return [...state];
        case ShoppingCartAction.ActionTypes.RemoveItem:
            index = findInCart(state, action.payload);
            state.splice(index, 1);
            updateLocalStorage(state);
            return [...state];
        case ShoppingCartAction.ActionTypes.ClearItems:
            updateLocalStorage([]);
            return [];
        default:
            return state;
    }
}
function findInCart(state, item) {
    return state.findIndex(i => i.event.id === item.event.id);
}
function updateLocalStorage(state) {
    localStorage.setItem('items', JSON.stringify(state));
}
//# sourceMappingURL=shopping-cart.reducer.js.map