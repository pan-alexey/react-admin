import { produce } from 'immer'
import {TodoAction, TodoActionTypes, TodoState} from "../types";

const initialState: TodoState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => produce(state, (state)=> {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            state.loading = true
        break;
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            state.loading = false
            state.todos = action.payload
        break;
        case TodoActionTypes.FETCH_TODOS_ERROR:
            state.loading = false
            state.error = action.payload
        break; 
        case TodoActionTypes.SET_TODO_PAGE:
            state.page = action.payload
        break;
    }
})
