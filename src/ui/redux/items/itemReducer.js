import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    INCREMENT,
    DECREMENT
} from './itemTypes'

const initialState = {
    loading: false,
    items: [],
    error: '',
    totalPrice: 0,
    itemCount: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ITEMS_SUCCESS:
            {
            const updatedItems = (state.items.length ===0)?action.payload:state.items
            return {
                ...state,
                loading: false,
                items: updatedItems,
                error: ''
            }   } 
        case FETCH_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                items: [],
                error: action.payload
            }
        case INCREMENT:
            {
                const prevCount = state.items[action.payload-1].count
                const newCount = prevCount + 1
                const products = [...state.items]
                const updatedProducts = products.map(product => {
                    return {
                        ...product
                    }
                })
                updatedProducts[action.payload - 1].count = newCount
                return {
                    ...state,
                    items: updatedProducts,
                    totalPrice: state.totalPrice + parseInt(state.items[action.payload - 1].price),
                    itemCount: state.itemCount + 1
                }
            }
            case DECREMENT:
                {
                    const prevCount = state.items[action.payload-1].count
                    if(prevCount === 0)
                    alert('cannot decrement more')
                    else{

                    
                    const newCount = prevCount - 1
                    const products = [...state.items]
                    const updatedProducts = products.map(product => {
                        return {
                            ...product
                        }
                    })
                    updatedProducts[action.payload - 1].count = newCount
                    return {
                        ...state,
                        items: updatedProducts,
                        totalPrice: state.totalPrice - parseInt(state.items[action.payload - 1].price),
                        itemCount: state.itemCount - 1
                    }
                }
            }
        default: return state
    }
}

export default reducer