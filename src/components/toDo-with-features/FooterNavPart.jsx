import { useContext, useEffect, memo } from "react";
import { RiSearch2Line } from "react-icons/ri/";
import { GlobalContext } from "../../globalContexts/globalContext";
import { handleFilterTodos } from "../../globalContexts/filterFunction";

const FooterNavPart = ({ setSearchIconClick }) => {
    const {
        todos,
        setCloneTodos,
        cloneTodos,
        setFilterKeyWord,
        filterKeyWord,
    } = useContext(GlobalContext);

    // for recover original array
    useEffect(() => {
        let filteredArray = handleFilterTodos(todos, filterKeyWord);
        if (filterKeyWord !== "all") {
            setCloneTodos(filteredArray);
        } else {
            setCloneTodos(todos);
        }
    }, [filterKeyWord, todos]);

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

                <p>{cloneTodos.length} items left </p>
            </div>

            <div className="footerButtonDiv">
                <button onClick={() => setFilterKeyWord("all")}>All</button>
                <button onClick={() => setFilterKeyWord("active")}>
                    Active
                </button>
                <button onClick={() => setFilterKeyWord("completed")}>
                    Completed
                </button>
            </div>
        </div>
    );
};
export default memo(FooterNavPart);
