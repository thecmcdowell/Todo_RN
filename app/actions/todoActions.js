import * as actions from './types'

export const addTodo = (item) => {
    return {
        type: actions.ADD,
        item
    }
}

export const deleteTodo = id => {
    return {
        type: actions.DELETE,
        id: id
    }
}

export const editTodo = (item, task) => {
    return {
        type: actions.EDIT,
        item,
        task
    }
}

export const toggleComplete = item => {
    return {
        type: actions.TOGGLE,
        item
    }
}

export const setVisibilityFilter = filter => ({
    type: actions.SET_VISIBILITY_FILTER,
    filter
})