/**
 * @fileOverview reducer creator, eliminate switch
 * @author Max
 **/

export function createReducer(initialState: any, handlers: any) {
    return function reducer(state = initialState, action: any) {
        if (action.error) return state;
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}
