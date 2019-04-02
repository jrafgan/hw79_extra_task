import axios from '../../axios-api';

export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS';
export const FETCH_PLACE_SUCCESS = 'FETCH_PLACE_SUCCESS';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const GET_ITEM = 'GET_ITEM';

export const fetchItemsSuccess = items => ({type: FETCH_ITEMS_SUCCESS, items});
export const fetchItemSuccess = item => ({type: FETCH_ITEM_SUCCESS, item});
export const fetchCategoriesSuccess = categories => ({type: FETCH_CATEGORIES_SUCCESS, categories});
export const fetchCategorySuccess = category => ({type: FETCH_CATEGORY_SUCCESS, category});
export const fetchPlacesSuccess = places => ({type: FETCH_PLACES_SUCCESS, places});
export const fetchPlaceSuccess = place => ({type: FETCH_PLACE_SUCCESS, place});
export const selectItem = id => ({type: GET_ITEM, id});

export const fetchItems = () => {
    return dispatch => {
        return axios.get('/items').then(
            response => {
                dispatch(fetchItemsSuccess(response.data));
            });
    }
};

export const fetchItem = id => {
    return dispatch => {
        return axios.get('/items/' + id).then(
            response => {
                dispatch(fetchItemSuccess(response.data));
                dispatch(fetchCategory(response.data.category_fk));
                dispatch(fetchPlace(response.data.place_fk));
            });
    }
};

export const createItem = itemData => {
    return dispatch => {
        return axios.post('/items', itemData);
    };
};

export const putItem = (id, itemData) => {
    return dispatch => {
        console.log(itemData);
        return axios.put('/items/' + id, itemData);
    };
};

export const deleteItem = (id) => {
    return dispatch => {
        console.log(id);
        return axios.delete('/items/' + id);
    };
};

export const fetchCategories = () => {
    return dispatch => {
        console.log();
        return axios.get('/categories').then(
            response => {
                dispatch(fetchCategoriesSuccess(response.data));
                console.log('Категории  ', response.data);
            });
    }
};

export const fetchCategory = id => {
    return dispatch => {
        return axios.get('/categories/' + id).then(
            response => {
                dispatch(fetchCategorySuccess(response.data));
            });
    }
};

export const fetchPlaces = () => {
    return dispatch => {
        return axios.get('/places').then(
            response => {
                dispatch(fetchPlacesSuccess(response.data));
                console.log('Места  ', response.data);
            });
    }
};

export const fetchPlace = id => {
    return dispatch => {
        return axios.get('/places/' + id).then(
            response => {
                dispatch(fetchPlaceSuccess(response.data));
            });
    }
};

