import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import dados from './dados'

const appReducers = combineReducers({dados})
const rootReducer = (state, action) => {
    return appReducers(state, action)
}

let store = createStore(rootReducer, applyMiddleware(thunk))
export default store