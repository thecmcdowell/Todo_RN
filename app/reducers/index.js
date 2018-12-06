import { combineReducers } from 'redux'
import todosReducers from './todos'
import visibilityReducers from './visibility'

export default combineReducers({
    todos: todosReducers,
    visibility: visibilityReducers
})