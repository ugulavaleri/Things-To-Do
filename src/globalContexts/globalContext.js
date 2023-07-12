import { createContext, useState } from "react";

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

export const GlobalContext = createContext(arr);

export function GlobalContextProvider({ children }) {
    const [todos, setTodos] = useState(arr);
    const [isActive, setIsActive] = useState([]);
    const [searchItems, setSearchItems] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const [cloneTodos, setCloneTodos] = useState([]);
    const [filterKeyWord, setFilterKeyWord] = useState("all");

    let empty = [...todos];

    return (
        <GlobalContext.Provider
            value={{
                arr,
                todos,
                setTodos,
                isActive,
                setIsActive,
                searchItems,
                setSearchItems,
                searchWord,
                setSearchWord,
                cloneTodos,
                setCloneTodos,
                filterKeyWord,
                setFilterKeyWord,
                empty,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
