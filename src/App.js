import "./App.css";
import SearchInput from "./components/toDo-with-features/searchPart";
import { GlobalContextProvider } from "./globalContexts/globalContext";

function App() {
    return (
        <GlobalContextProvider>
            <SearchInput />
        </GlobalContextProvider>
    );
}

export default App;
