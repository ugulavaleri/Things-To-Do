import { useContext } from "react";
import { GlobalContext } from "../../globalContexts/globalContext";

const ListWrapper = ({ todo }) => {
    const { dispatch, ACTIONS } = useContext(GlobalContext);

    const handleRemoveTodo = () => {
        dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: todo.id } });
    };

    const handleCheckboxChange = () => {
        dispatch({ type: ACTIONS.CHECK_TODO, payload: { id: todo.id } });
    };

    return (
        <>
            <li className="listItemsContainer">
                <div
                    style={{
                        textDecoration: todo.isActive ? "line-through" : "",
                    }}
                    className="inner-listItemsContainer"
                >
                    <input
                        type="checkbox"
                        checked={todo.isActive}
                        onChange={handleCheckboxChange}
                    />
                    {todo.title}
                </div>
                <div className="removeButton">
                    <span className="deleteButton" onClick={handleRemoveTodo}>
                        X
                    </span>
                </div>
            </li>
        </>
    );
};

export default ListWrapper;
