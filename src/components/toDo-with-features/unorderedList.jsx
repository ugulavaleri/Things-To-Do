import ListWrapper from "./listWrapper";
import { useContext } from "react";

import { GlobalContext } from "../../globalContexts/globalContext";

const UnorderedList = ({ searchWord }) => {
    const { plans, isActive, searchItems } = useContext(GlobalContext);
    let displayData;
    if (isActive.length > 0) {
        displayData = isActive;
    } else if (searchItems.length > 0) {
        displayData = searchItems;
    } else {
        displayData = plans;
    }

    return (
        <>
            <div>
                <ul style={{ padding: 0 }}>
                    {displayData.map((todo) => {
                        if (todo.title !== "No result") {
                            return <ListWrapper key={todo.id} todo={todo} />;
                        } else {
                            return (
                                <h1 key={todo.id} className="noResultTitle">
                                    {todo.title}:"{searchWord}"
                                </h1>
                            );
                        }
                    })}
                </ul>
            </div>
        </>
    );
};

export default UnorderedList;
