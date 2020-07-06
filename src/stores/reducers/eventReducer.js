const initialState = {
    events: [],
    loading: false,
    error: null
}
export default function reducer(state = initialState, action) {
    if (action.type === 'SET_EVENTS') {
        return {
            ...state,
            events: action.payload
        }
    }  else if (action.type === 'SET_LOADING') {
        return {
            ...state,
            loading: action.payload
        }
    } else if (action.type === 'SET_ERROR') {
        return {
            ...state,
            error: action.payload
        }
    } else {
        return state;
    }
}