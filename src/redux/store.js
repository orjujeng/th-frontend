import {createStore,applyMiddleware} from 'redux'
import memberInfoReducer from './reducer/memberInfoReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
export default createStore(memberInfoReducer,composeWithDevTools(applyMiddleware(thunk)))