const initialState = {
    status: '',
    loading: false,
    error: null
}
export default function reducer(state = initialState, action) {
    if (action.type === 'SET_STATUS') {
        return {
            ...state,
            status: action.payload
        }
    }  else if (action.type === 'SET_LOADINGADD') {
        return {
            ...state,
            loading: action.payload
        }
    } else if (action.type === 'SET_ERRORADD') {
        return {
            ...state,
            error: action.payload
        }
    } else {
        return state;
    }
}