import {
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORY_SUCCESS,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEMS_SUCCESS, FETCH_PLACE_SUCCESS,
    FETCH_PLACES_SUCCESS} from "../actions/itemActions";

const initialState = {
    items: [],
    item: null,
    categories: [],
    category: null,
    places: [],
    place: null,

};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS_SUCCESS:
            return {...state, items: action.items};

        case FETCH_ITEM_SUCCESS:
            return {...state, item: action.item};

        case FETCH_CATEGORIES_SUCCESS:
            return {...state, categories: action.categories};

        case FETCH_CATEGORY_SUCCESS:
            console.log('this is category success', action.category);
            return {...state, category: action.category};

        case FETCH_PLACES_SUCCESS:
            return {...state, places: action.places};

        case FETCH_PLACE_SUCCESS:
            return {...state, place: action.place};

        default:
            return state;
    }
};

export default itemsReducer;