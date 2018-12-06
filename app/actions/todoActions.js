import * as actions from './types'

import _ from 'lodash'

export const addTodo = (name) => {
    return {
        type: actions.ADD,
        item: {
            id: _.uniqueId('todo_'),
            name,
            completed: false
        }
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