import { ACTIONS } from "./globalContext";

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADDER_TEXT:
            return {
                ...state,
                adderText: action.payload.text,
            };
        case ACTIONS.ADD_TODO:
            return {
                ...state,
                todos: [
                    {
                        id: action.payload.id,
                        title: action.payload.title,
                        isActive: false,
                    },
                    ...state.todos,
                ],
            };
        case ACTIONS.CLEAR_INPUT:
            return {
                ...state,
                adderText: "",
            };

        case ACTIONS.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((t) => t.id !== action.payload.id),
            };
        case ACTIONS.CHECK_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id == action.payload.id) {
                        return { ...todo, isActive: !todo.isActive };
                    }
                    return todo;
                }),
            };
        case ACTIONS.SEARCH_TODO_WORD:
            return {
                ...state,
                searchWord: action.payload.searchWord,
            };

        case ACTIONS.FILL_TODOS_CLONE:
            return {
                ...state,
                cloneTodos: action.payload.filtered,
            };
        case ACTIONS.FILTER_BY_BUTTON:
            return {
                ...state,
                cloneTodos: action.payload.filteredArray,
            };
        case ACTIONS.FILTER_BY_ALL_BUTTON:
            return {
                ...state,
                cloneTodos: action.payload.filteredArray,
            };
        case ACTIONS.FILTER_BY_ALL:
            return {
                ...state,
                filterKeyWord: action.payload.keyWord,
            };
        case ACTIONS.FILTER_BY_ACTIVE:
            return {
                ...state,
                filterKeyWord: action.payload.keyWord,
            };
        case ACTIONS.FILTER_BY_COMPLETED:
            return {
                ...state,
                filterKeyWord: action.payload.keyWord,
            };
        default:
            return state;
    }
};
