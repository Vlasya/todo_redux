import {ADD_TODO, DELETE_TODO, CHANGE_STATUS_TODO} from "../actions/actions";

const INITIAL_STATE = {
    todos: [
        {
            title: "Costa Rican Colon North Carolina parsing",
            completed: true
        },
        {
            title: "Industrial indexing context-sensitive",
            completed: false
        },
        {
            title: "North Korean Won",
            completed: false
        }
    ]
}

export function reducer(state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos, payload
                ]};

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.title !== payload.title)
            };

        case CHANGE_STATUS_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => (
                    todo.title === payload.title ? {...todo, completed: !todo.completed} : todo
                ))
            }
        default:
            return state
    }
}