import {FETCH_ITEMS_SUCCESS, GET_ITEM} from "../actions/itemActions";

const initialState = {
    items: [],
    item: null
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS_SUCCESS:
            console.log(state.items);
            return {...state, items: action.items};

        case GET_ITEM:
            console.log(action.id);
            const ndx = state.items.findIndex(item=>item.id === action.id);
            console.log(ndx);
            return {...state, };

        default:
            return state;
    }
};

export default itemsReducer;