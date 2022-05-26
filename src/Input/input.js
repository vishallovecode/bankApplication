import React from 'react';
import './input.scss';

const Input = props => {
    const {
        type,
        name,
        className,
        value,
        searchHandler,
        placeHolder,
        setSearchTerm,
        showText,
        setShowText,
        selectedCategory,
    } = props;
    const onChange = value => {
        setSearchTerm(value);
        setShowText(false);
        searchHandler();
    };
    return (
        <div className="in-container">
            <input
                id="myinput"
                type={type}
                name={name}
                className={className ? className : 'inputContainer'}
                value={value}
                onChange={e => onChange(e.target.value)}
                placeHolder={placeHolder}
            />
            {value && showText && <span>{`Showing all bank for ${selectedCategory.name} - ${value}`}</span>}
        </div>
    );
};
export default Input;
