import ListWrapper from "./listWrapper";
import { memo, useContext } from "react";

import { GlobalContext } from "../../globalContexts/globalContext";

const UnorderedList = () => {
    const { state } = useContext(GlobalContext);

    return (
        <>
            <div>
                <ul style={{ padding: 0 }}>
                    {state.searchWord.length !== 0 &&
                    state.cloneTodos.length === 0 ? (
                        <h1 className="noResultTitle">
                            No result :"{state.searchWord}"
                        </h1>
                    ) : (
                        state.cloneTodos.map((todo) => {
                            return <ListWrapper key={todo.id} todo={todo} />;
                        })
                    )}
                </ul>
            </div>
        </>
    );
};

export default memo(UnorderedList);
