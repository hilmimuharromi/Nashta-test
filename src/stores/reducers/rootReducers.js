import {
    combineReducers
} from 'redux'
import eventReducer from './eventReducer'
import addEventReducer from './addEventReducer'


const rootReducers = combineReducers({
    events: eventReducer,
    addEvent: addEventReducer
})

export default rootReducers