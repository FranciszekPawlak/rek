import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import widgetReducer from './app/formWidget/duck/reducers'
const store = createStore(widgetReducer, applyMiddleware(thunk))
export default store