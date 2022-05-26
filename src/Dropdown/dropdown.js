import React, { useState } from 'react';
import './dropdown.scss';
const Dropdown = props => {
    const { data, value, placeHolder, handleDropdownChange } = props;

    const [isDropdownActive, setDropdownActive] = useState(false);

    const handleDropdownClick = data => {
        handleDropdownChange(data);
        toggleDropdown();
    };

    const toggleDropdown = () => {
        setDropdownActive(!isDropdownActive);
    };
    return (
        <div className="dropdown--container">
            <div onClick={toggleDropdown} className="dropdown-field">
                <div className={`value ${value && value.name ? `selected` : ``}`}>
                    {value && value.name ? value.name : placeHolder ? placeHolder : 'Select'}
                </div>
                <span className={`icon-arrow ${!isDropdownActive ? `down` : 'up'}`}></span>
            </div>

            {isDropdownActive && (
                <div className="options-container">
                    {data &&
                        data.length > 0 &&
                        data.map(item => (
                            <div
                                onClick={() => handleDropdownClick(item)}
                                key={item.id}
                                value={item.name}
                                className={`item ${value && value.id === item.id ? `selected` : ``}`}
                            >
                                <div className="text-container">
                                    <div className="label">{item.name}</div>
                                </div>
                                <div
                                    className={`circle flex-center ${value && value.id === item.id ? `selected` : ``}`}
                                >
                                    <span
                                        className={`icon--correct ${value && value.id === item.id ? `selected` : ``}  `}
                                    ></span>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};
export default Dropdown;
