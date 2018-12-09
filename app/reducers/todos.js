import { ADD, DELETE, EDIT, TOGGLE, SHOW_COMPLETED, SHOW_INCOMPLETE, SHOW_ALL } from '../actions/types'
import _ from 'lodash'

const INITIAL_STATE = []
const todosReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.item
            ]
        case DELETE:
            return state.filter(todo => todo.id !== action.id)
        case EDIT:
            let task = action.task.name
            return state.map(todo => todo.id === action.item.id ? {...todo, name: task } : todo)
        case TOGGLE:
            let item = action.item.item
            return state.map(todo => todo.id === item.id ? {...todo, completed: !item.completed } : todo)
        default:
            return state
    }
}

export default todosReducers