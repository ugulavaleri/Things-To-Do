import ListWrapper from "./listWrapper";

const UnorderedList = ({ plans, isActive, searchItems, setPlans }) => {
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
                        return (
                            <ListWrapper
                                key={event.id}
                                event={event}
                                plans={plans}
                                setPlans={setPlans}
                            />
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default UnorderedList;
