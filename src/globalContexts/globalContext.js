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
    const [plans, setPlans] = useState(arr);
    const [isActive, setIsActive] = useState([]);
    const [searchItems, setSearchItems] = useState([]);

    return (
        <GlobalContext.Provider
            value={{
                arr,
                plans,
                setPlans,
                isActive,
                setIsActive,
                searchItems,
                setSearchItems,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
