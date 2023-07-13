import { useState, useContext } from "react";
import FooterNavPart from "./FooterNavPart";
import UnorderedList from "./unorderedList";
import { GlobalContext } from "../../globalContexts/globalContext";
import { useEffect } from "react";

const SearchInput = () => {
    const { dispatch, state, ACTIONS } = useContext(GlobalContext);
    const [isSearchIconClicked, setSearchIconClick] = useState(false);

    const handleAddTodo = () => {
        if (state.adderText.trim() !== "") {
            dispatch({
                type: ACTIONS.ADD_TODO,
                payload: {
                    id: state.todos.length + 1,
                    title: state.adderText,
                    isActive: false,
                },
            });
        }
        dispatch({ type: ACTIONS.CLEAR_INPUT });
    };

    useEffect(() => {
        const filtered = state.todos.filter((todo) => {
            if (
                todo.title
                    .toLowerCase()
                    .includes(state.searchWord.toLowerCase())
            ) {
                return todo;
            }
        });
        dispatch({
            type: ACTIONS.FILL_TODOS_CLONE,
            payload: { filtered: filtered },
        });
    }, [state.searchWord]);

    return (
        <>
            <div className="todoContainer">
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: 40,
                        fontWeight: 700,
                    }}
                >
                    THINGS TO DO
                </h1>
                <div className="searchPartDiv">
                    {isSearchIconClicked ? (
                        <>
                            <input
                                type="text"
                                placeholder="Search.."
                                className="Input"
                                value={state.searchWord}
                                onChange={(e) =>
                                    dispatch({
                                        type: ACTIONS.SEARCH_TODO_WORD,
                                        payload: { searchWord: e.target.value },
                                    })
                                }
                            />
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                onChange={(e) => {
                                    dispatch({
                                        type: ACTIONS.ADDER_TEXT,
                                        payload: { text: e.target.value },
                                    });
                                }}
                                className="Input"
                                placeholder="Add new.."
                                value={state.adderText}
                            />
                            <button
                                onClick={handleAddTodo}
                                className="adderButton"
                            >
                                Add
                            </button>
                        </>
                    )}
                </div>
                <UnorderedList />
                <FooterNavPart setSearchIconClick={setSearchIconClick} />
            </div>
        </>
    );
};

export default SearchInput;
