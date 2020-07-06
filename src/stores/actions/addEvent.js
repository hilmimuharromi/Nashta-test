import axios from "axios"
export default function addEvent(payload) {
    return (dispatch) => {
        dispatch(SET_LOADINGADD(true))
        axios({
            method: 'post',
            url: 'http://localhost:3000/events',
            data: payload
        })
            .then(({
                data
            }) => {
                dispatch(FETCH_EVENTS('http://localhost:3000/events'))
                dispatch(SET_STATUS('done'))
            })
            .catch(error => {
                dispatch(SET_ERRORADD(error))
                
            })
            .finally(_ => {
                dispatch(SET_LOADINGADD(false))
            })
    }
}

export function FETCH_EVENTS(url) {
    return (dispatch) => {
        dispatch(SET_LOADINGADD(true))
        axios
            .get(url)
            .then(({
                data
            }) => {
                dispatch(SET_EVENTS(data))
                console.log(data,'events');
                
            })
            .catch(error => {
                dispatch(SET_ERRORADD(error))
            })
            .finally(_ => {
                dispatch(SET_LOADINGADD(false))
            })
    }
}


export function SET_EVENTS(data) {
    return {
        type: "SET_EVENTS",
        payload: data
    }
}

export function SET_STATUS(data) {
    return {
        type: "SET_STATUS",
        payload: data
    }
}

export function SET_LOADINGADD(data) {
    return {
        type: "SET_LOADINGADD",
        payload: data
    }
}

export function SET_ERRORADD(data) {
    return {
        type: "SET_ERRORADD",
        payload: data
    }
}

