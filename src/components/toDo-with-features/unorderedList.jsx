import ListWrapper from "./listWrapper";

const UnorderedList = ({
    plans,
    isActive,
    searchItems,
    setPlans,
    searchWord,
}) => {
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
                    {displayData.map((event) => {
                        if (event.title !== "No result") {
                            return (
                                <ListWrapper
                                    key={event.id}
                                    event={event}
                                    plans={plans}
                                    setPlans={setPlans}
                                />
                            );
                        } else {
                            return (
                                <h1 key={event.id} className="noResultTitle">
                                    {event.title}:"{searchWord}"
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
