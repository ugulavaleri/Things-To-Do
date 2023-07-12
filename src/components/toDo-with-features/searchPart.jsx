import { useState, useContext } from "react";
import FooterNavPart from "./FooterNavPart";
import UnorderedList from "./unorderedList";
import { GlobalContext } from "../../globalContexts/globalContext";
import "./style.css";

const SearchInput = () => {
    const { plans, setPlans, setSearchItems } = useContext(GlobalContext);
    const [searchWord, setSearchWord] = useState("");

    const [noResultAfterSearch, setResultAfterSearch] = useState([
        {
            id: 0,
            title: "No result",
        },
    ]);

    const [addedText, setAddText] = useState("");
    const [isSearchIconClicked, setSearchIconClick] = useState(false);

    const handleChange = () => {
        if (addedText.trim() !== "") {
            setPlans([
                {
                    id: plans.length + 1,
                    title: addedText,
                    isActive: false,
                },
                ...plans,
            ]);
        }
        setAddText("");
    };

    const handleSearch = (e) => {
        setSearchWord(e);
        const searchFiltered = plans.filter((item) => {
            if (item.title.toLowerCase().includes(e.toLowerCase())) {
                return item.title.toLowerCase().includes(e.toLowerCase());
            }
        });
        if (searchFiltered.length === 0) {
            setSearchItems(noResultAfterSearch);
            return;
        }

        setSearchItems(searchFiltered);
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
                                onClick={handleChange}
                                className="adderButton"
                            >
                                Add
                            </button>
                        </>
                    )}
                </div>
                <UnorderedList setPlans={setPlans} searchWord={searchWord} />
                <FooterNavPart
                    plans={plans}
                    setSearchIconClick={setSearchIconClick}
                />
            </div>
        </>
    );
};

export default SearchInput;
