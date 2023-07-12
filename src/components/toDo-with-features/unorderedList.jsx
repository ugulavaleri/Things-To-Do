import ListWrapper from "./listWrapper";
import { memo, useContext } from "react";

import { GlobalContext } from "../../globalContexts/globalContext";

const UnorderedList = ({ searchWord }) => {
    const { cloneTodos } = useContext(GlobalContext);

    return (
        <>
            <div>
                <ul style={{ padding: 0 }}>
                    {cloneTodos.map((todo) => {
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

export default memo(UnorderedList);
