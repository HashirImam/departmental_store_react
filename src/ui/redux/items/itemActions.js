import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    INCREMENT,
    DECREMENT
} from './itemTypes'
import axios from 'axios'


export const fetchItemsRequest = () => {
    return {
        type: FETCH_ITEMS_REQUEST
    }
}

export const fetchItemsSuccess = items => {
    return {
        type: FETCH_ITEMS_SUCCESS,
        payload: items
    }
}

export const fetchItemsFailure = error => {
    return {
        type: FETCH_ITEMS_FAILURE,
        payload: error
    }
}

export const fetchItems = () => {
    return (dispatch) => {
        dispatch(fetchItemsRequest)
        axios.get('https://5f33e9c1cfaf5a001646b758.mockapi.io/api/v0/product')
        .then(response => {
            const products = response.data;
           
            const updatedproducts = products.map(product => {
                return {
                    ...product,
                    count: 0
                }
                })
            dispatch(fetchItemsSuccess(updatedproducts))
            

        }
    )
    
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchItemsFailure(errorMsg))
        })
 

    }
}

export const increment = id => {
    return {
        type: INCREMENT,
        payload: id
    }
}

export const decrement = id => {
    return {
        type: DECREMENT,
        payload: id
    }
}