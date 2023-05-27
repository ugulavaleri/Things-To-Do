import "./style.css";
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri/";

const FooterNavPart = ({
    plans,
    setIsActive,
    setSearchIconClick,
    setSearchItems,
    isActive,
    searchItems,
}) => {
    const [firstBtn, setFirstBtn] = useState(true);
    const [secondBtn, setSecondBtn] = useState(false);

    const handleFirstClick = () => {
        setFirstBtn(true);
        setSecondBtn(false);

        setIsActive([]);
    };

    let itemsNumber;
    if (isActive.length > 0) {
        itemsNumber = isActive;
    } else if (searchItems.length > 0) {
        itemsNumber = searchItems;
    } else {
        itemsNumber = plans;
    }

    const handleSecondClick = () => {
        setFirstBtn(false);
        setSecondBtn(true);

        const activedItems = itemsNumber.filter((e) => e.isActive === true);
        setIsActive(activedItems);
    };

    return (
        <div className="footerPart">
            <div className="itemsCounter">
                <RiSearch2Line
                    style={{ fontSize: "20px" }}
                    className="SearchIcon"
                    onClick={() => {
                        setSearchIconClick((prev) => !prev);
                        setSearchItems([]);
                    }}
                />

                <p>{itemsNumber.length} items left </p>
            </div>

            <div className="footerButtonDiv">
                <button
                    className={firstBtn ? "active" : "noBorder"}
                    onClick={handleFirstClick}
                >
                    All
                </button>
                <button
                    className={secondBtn ? "active" : "noBorder"}
                    onClick={handleSecondClick}
                >
                    Active
                </button>
            </div>
        </div>
    );
};
export default FooterNavPart;
