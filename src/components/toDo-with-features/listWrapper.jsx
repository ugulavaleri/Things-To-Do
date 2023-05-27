import { useState } from "react";

const ListWrapper = ({ event, setPlans, plans }) => {
    const [isListItemHovered, setListItemHover] = useState(false);

    const handleMouseOver = () => {
        setListItemHover(true);
    };
    const handleMouseLeave = () => {
        setListItemHover(false);
    };

    const handleDeleteButton = () => {
        setPlans((prev) => prev.filter((e) => e.id !== event.id));
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
                key={event.id}
                className="listItemsContainer"
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
                        checked={event.isActive}
                        id={event.id}
                        onChange={(e) => handleCheckboxChange(e.target.id)}
                    />
                    {event.title}
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
