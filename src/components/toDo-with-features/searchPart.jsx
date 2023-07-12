import { useState, useContext } from "react";
import FooterNavPart from "./FooterNavPart";
import UnorderedList from "./unorderedList";
import { GlobalContext } from "../../globalContexts/globalContext";

const SearchInput = () => {
    const {
        todos,
        setTodos,
        setSearchItems,
        setSearchWord,
        searchWord,
        setCloneTodos,
        cloneTodos,
        empty,
    } = useContext(GlobalContext);

    const [noResultAfterSearch, setResultAfterSearch] = useState([
        {
            id: 0,
            title: "No result",
        },
    ]);

    const [addedText, setAddText] = useState("");
    const [isSearchIconClicked, setSearchIconClick] = useState(false);

    const handleAddTodo = () => {
        if (addedText.trim() !== "") {
            setTodos([
                {
                    id: todos.length + 1,
                    title: addedText,
                    isActive: false,
                },
                ...todos,
            ]);
        }
        setAddText("");
    };

    const handleSearch = (e) => {
        setSearchWord(e);
        const searchFiltered = cloneTodos.filter((item) => {
            if (item.title.toLowerCase().includes(e.toLowerCase())) {
                return item.title.toLowerCase().includes(e.toLowerCase());
            }
        });
        if (searchFiltered.length === 0) {
            setSearchItems(noResultAfterSearch);
            return;
        }
        setCloneTodos(searchFiltered);
    };

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
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setAddText(e.target.value);
                                }}
                                className="Input"
                                placeholder="Add new.."
                                value={addedText}
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
                <UnorderedList searchWord={searchWord} />
                <FooterNavPart setSearchIconClick={setSearchIconClick} />
            </div>
        </>
    );
};

export default SearchInput;
