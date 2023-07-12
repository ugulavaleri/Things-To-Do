import { useState, useContext } from "react";
import { GlobalContext } from "../../globalContexts/globalContext";
import { handleFilterTodos } from "../../globalContexts/filterFunction";

const ListWrapper = ({ todo }) => {
    const {
        todos,
        setTodos,
        cloneTodos,
        setCloneTodos,
        setFilterKeyWord,
        filterKeyWord,
    } = useContext(GlobalContext);

    // works
    const handleRemoveTodo = () => {
        setTodos((prev) =>
            prev.filter((t) => {
                return t.id !== todo.id;
            })
        );
    };

    // works
    const handleCheckboxChange = () => {
        const item = todos.map((e) => {
            if (e.id === todo.id) {
                e.isActive = !e.isActive;
            }
            return e;
        });
        setTodos(item);
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

                    {/* {isListItemHovered && (
                        <span
                            className="deleteButton"
                            onClick={handleRemoveTodo}
                        >
                            X
                        </span>
                    )} */}
                </div>
            </li>
        </>
    );
};

export default ListWrapper;
