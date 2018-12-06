import 'react-native'
import React from 'react'
import {Counter} from '../../app/components/index'

import renderer from 'react-test-renderer'
describe('it renders counter', () => {
    it('renders counter with no unfinished tasks', () => {
        const todos = []
        const tree = renderer.create(
            <Counter todos={todos} />
        )
        expect(tree).toMatchSnapshot()
    }),
    it('renders counter with unfinished tasks', () => {
        const todos = [{
            name: 'write tests',
            index: 'todos_1',
            completed: false
        }]
        const tree = renderer.create(
            <Counter todos={todos} />
        )
        expect(tree).toMatchSnapshot()
    })
})
