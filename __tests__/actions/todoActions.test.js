import { ADD, DELETE, EDIT, TOGGLE, SET_VISIBILITY_FILTER } from "../../app/actions/types";
import * as actions from "../../app/actions/todoActions.js";

const blob = [{
    name: "Buy Eggs",
    id: "todo_3",
    completed: false
}];

describe("todoActions test", () => {
    it("adds a todod", () => {
            const name = "Test";
            const expectedOutcome = {
                type: ADD,
                item: {
                    id: "todo_1",
                    name,
                    completed: false
                }
            };
            expect(actions.addTodo(name)).toEqual(expectedOutcome);
        }),
        it("deletes a todo", () => {
            const expectedOutcome = {
                id: [{ completed: false, id: "todo_3", name: "Buy Eggs" }],
                type: DELETE
            };
            expect(actions.deleteTodo(blob)).toEqual(expectedOutcome);
        }),
        it('edits a todo', () => {
            const expectedOutcome = {
                type: EDIT,
                item: blob
            }
            expect(actions.editTodo(blob)).toEqual(expectedOutcome)
        }),
        it('toggles todo', () => {
            const expectedOutcome = {
                type: TOGGLE,
                item: blob
            }
            expect(actions.toggleComplete(blob)).toEqual(expectedOutcome)
        }),
        it('sets filter to SHOW_ALL', () => {
            const input = {
                filter: 'SHOW_ALL',
            }
            const expectedOutcome = {
                type: SET_VISIBILITY_FILTER,
                filter: {
                    filter: 'SHOW_ALL'
                }
            }
            expect(actions.setVisibilityFilter(input)).toEqual(expectedOutcome)
        })
});