import { useState } from "react";
import FooterNavPart from "./FooterNavPart";
import UnorderedList from "./unorderedList";
import "./style.css";

const arr = [
    {
        id: 1,
        title: "Javascript practice",
        isActive: true,
    },
    {
        id: 2,
        title: "React",
        isActive: true,
    },
    {
        id: 3,
        title: "Next js",
        isActive: false,
    },
    {
        id: 4,
        title: "typescript",
        isActive: false,
    },
];

const SearchInput = () => {
    const [plans, setPlans] = useState(arr);
    const [isActive, setIsActive] = useState([]);
    const [searchItems, setSearchItems] = useState([]);
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
                ...plans,
                {
                    id: plans.length + 1,
                    title: addedText,
                    isActive: false,
                },
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
                <UnorderedList
                    plans={plans}
                    isActive={isActive}
                    searchItems={searchItems}
                    setPlans={setPlans}
                    searchWord={searchWord}
                />
                <FooterNavPart
                    plans={plans}
                    isActive={isActive}
                    searchItems={searchItems}
                    setIsActive={setIsActive}
                    setSearchIconClick={setSearchIconClick}
                    setSearchItems={setSearchItems}
                />
            </div>
        </>
    );
};

export default SearchInput;
