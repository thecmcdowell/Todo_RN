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
            _.remove(state, function(task) {
                return task.id === action.id
            })
            return [
                ...state
            ]
        case EDIT:
            state.splice(action.item.index, 1, action.task)
            return [
                ...state
            ]
        case TOGGLE:
            let item = action.item.item
            state.splice(action.item.index, 1, {...item, completed: !item.completed })
            return [
                ...state
            ]
        default:
            return state
    }
}

export default todosReducers