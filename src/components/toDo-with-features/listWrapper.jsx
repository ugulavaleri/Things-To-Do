import { useState, useContext } from "react";
import { GlobalContext } from "../../globalContexts/globalContext";

const ListWrapper = ({ todo }) => {
    const { plans, setPlans } = useContext(GlobalContext);
    const [isListItemHovered, setListItemHover] = useState(false);

    const handleMouseOver = () => {
        setListItemHover(true);
    };
    const handleMouseLeave = () => {
        setListItemHover(false);
    };

    const handleDeleteButton = () => {
        setPlans((prev) => prev.filter((e) => e.id !== todo.id));
    };

    const handleCheckboxChange = (id) => {
        const item = plans.map((e) => {
            if (e.id === Number(id)) {
                e.isActive = !e.isActive;
            }
            return e;
        });
        setPlans(item);
    };

    return (
        <>
            <li
                className="listItemsContainer"
                style={{ textDecoration: todo.isActive ? "line-through" : "" }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 7,
                    }}
                >
                    <input
                        type="checkbox"
                        checked={todo.isActive}
                        id={todo.id}
                        onChange={(e) => handleCheckboxChange(e.target.id)}
                    />
                    {todo.title}
                </div>
                <div>
                    {isListItemHovered && (
                        <span
                            className="deleteButton"
                            onClick={handleDeleteButton}
                        >
                            X
                        </span>
                    )}
                </div>
            </li>
        </>
    );
};

export default ListWrapper;
