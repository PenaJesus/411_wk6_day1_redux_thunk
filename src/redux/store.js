import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import state from './state'
import thunk from 'redux-thunk';

//when using thunk we require middleware so we have to import "applyMiddleware" from redux and import "thunk" from redux-thunk

export default createStore(reducers, state)