import visibilityReducers from '../../app/reducers/visibility'
import { VisibilityFilters } from '../../app/actions/types'


describe('tests visibility reducers', () => {
    it('should return SHOW_COMPLETED filter', () => {
            const input = {
                type: 'SET_VISIBILITY_FILTER',
                filter: VisibilityFilters.SHOW_COMPLETED
            }
            expect(visibilityReducers({}, input)).toEqual(VisibilityFilters.SHOW_COMPLETED)
        }),
        it('should return SHOW_ACTIVE filter', () => {
            const input = {
                type: 'SET_VISIBILITY_FILTER',
                filter: VisibilityFilters.SHOW_ACTIVE
            }
            expect(visibilityReducers({}, input)).toEqual(VisibilityFilters.SHOW_ACTIVE)
        }),
        it('should return SHOW_ALL filter', () => {
            const input = {
                type: 'SET_VISIBILITY_FILTER',
                filter: VisibilityFilters.SHOW_ALL
            }
            expect(visibilityReducers({}, input)).toEqual(VisibilityFilters.SHOW_ALL)
        })
})