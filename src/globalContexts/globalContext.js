import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { todosData, statesObject } from "./defaultData";

export const GlobalContext = createContext(todosData);

export const ACTIONS = {
    ADDER_TEXT: "adderText",
    ADD_TODO: "AddTodo",
    CLEAR_INPUT: "clearInput",
    REMOVE_TODO: "RemoveTodo",
    CHECK_TODO: "CheckTodo",
    SEARCH_TODO_WORD: "searchTodoWord",
    FILL_TODOS_CLONE: "fillTodosClone",
    FILTER_BY_BUTTON: "filterByButton",
    FILTER_BY_ALL_BUTTON: "filterByAllButton",
    FILTER_BY_ALL: "filterByall",
    FILTER_BY_ACTIVE: "filterByActive",
    FILTER_BY_COMPLETED: "filterBycompleted",
};

export function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, statesObject);

    return (
        <GlobalContext.Provider
            value={{
                dispatch,
                state,
                ACTIONS,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
