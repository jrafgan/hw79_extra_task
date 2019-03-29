import axios from '../../axios-api';

export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const GET_ITEM = 'GET_ITEM';

export const fetchItemsSuccess = items => ({type: FETCH_ITEMS_SUCCESS, items});
export const createItemSuccess = () => ({type: CREATE_ITEM_SUCCESS});
export const selectItem = id => ({type: GET_ITEM, id});

export const fetchItems = () => {
    return dispatch => {
        return axios.get('/items').then(
            response => {
                dispatch(fetchItemsSuccess(response.data));
                    console.log(response.data);
            });
    }
};

export const createItem = itemData => {
    return dispatch => {
        return axios.post('/items', itemData).then(
            () => {

        console.log(itemData);
        dispatch(createItemSuccess());
    });
};
};