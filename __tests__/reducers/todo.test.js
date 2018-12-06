import todosReducers from "../../app/reducers/todos";
import { ADD, DELETE, EDIT } from "../../app/actions/types";

const initState = [{
    name: "Buy Eggs",
    id: "todo_3",
    completed: false
}];
const blob = {
    name: "Buy Eggs",
    id: "todo_3",
    completed: false
}
describe("tests the todo reducers", () => {
    it("should return init state", () => {
            expect(todosReducers(undefined, {})).toEqual([])
        }),
        it("should add a todo", () => {
            const input = {
                type: ADD,
                item: {
                    id: "todo_1",
                    name: "test",
                    completed: false
                }
            }
            const expectedOutcome = [{
                name: "test",
                id: "todo_1",
                completed: false
            }]
            expect(todosReducers([], input)).toEqual(expectedOutcome)
        }),
        it("should delete todo", () => {
            const input = {
                type: DELETE,
                id: 'todo_3'
            }
            expect(todosReducers(initState, input)).toEqual([])
        }),
        it('should edit task', () => {
            const input = {
                type: EDIT,
                item: blob,
                task: {
                    name: "Buy socks",
                    id: "todo_3",
                    completed: false
                }
            }
            const expectedOutcome = [{
                name: "Buy socks",
                id: "todo_3",
                completed: false
            }]
            expect(todosReducers(initState, input)).toEqual(expectedOutcome)
        })
})