import { useContext, useEffect, memo } from "react";
import { RiSearch2Line } from "react-icons/ri/";
import { GlobalContext } from "../../globalContexts/globalContext";
import { handleFilterTodos } from "../../globalContexts/filterFunction";

const FooterNavPart = ({ setSearchIconClick }) => {
    const { state, dispatch, ACTIONS } = useContext(GlobalContext);

    // for recover original array
    useEffect(() => {
        let filteredArray = handleFilterTodos(state.todos, state.filterKeyWord);
        if (state.filterKeyWord !== "all") {
            dispatch({
                type: ACTIONS.FILTER_BY_BUTTON,
                payload: { filteredArray: filteredArray },
            });
        } else {
            dispatch({
                type: ACTIONS.FILTER_BY_ALL_BUTTON,
                payload: { filteredArray: state.todos },
            });
        }
    }, [state.filterKeyWord, state.todos]);

    return (
        <div className="footerPart">
            <div className="itemsCounter">
                <RiSearch2Line
                    style={{ fontSize: "20px" }}
                    className="SearchIcon"
                    onClick={() => {
                        setSearchIconClick((prev) => !prev);
                    }}
                />

                <p>{state.cloneTodos.length} items left </p>
            </div>

            <div className="footerButtonDiv">
                <button
                    className="btn"
                    onClick={() =>
                        dispatch({
                            type: ACTIONS.FILTER_BY_ALL,
                            payload: { keyWord: "all" },
                        })
                    }
                >
                    All
                </button>
                <button
                    className="btn"
                    onClick={() =>
                        dispatch({
                            type: ACTIONS.FILTER_BY_ACTIVE,
                            payload: { keyWord: "active" },
                        })
                    }
                >
                    Active
                </button>
                <button
                    className="btn"
                    onClick={() =>
                        dispatch({
                            type: ACTIONS.FILTER_BY_COMPLETED,
                            payload: { keyWord: "completed" },
                        })
                    }
                >
                    Completed
                </button>
            </div>
        </div>
    );
};
export default memo(FooterNavPart);
