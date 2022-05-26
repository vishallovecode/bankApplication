import React from 'react';
import Dropdown from '../Dropdown';
import Input from '../Input';
import './header.scss';
const Header = props => {
    const {
        selectedCity,
        handleDropdownChange,
        setShowText,
        showText,
        setSearchTerm,
        categoryHandler,
        searchTerm,
        selectedCategory,
        searchHandler,
    } = props;
    const data = [
        {
            name: 'MUMBAI',
            id: 1,
        },
        {
            name: 'DELHI',
            id: 2,
        },
        {
            name: 'PUNE',
            id: 3,
        },
        {
            name: 'BANGALORE',
            id: 4,
        },
        {
            name: 'LUCKNOW',
            id: 5,
        },
    ];
    const categoryData = [
        {
            name: 'IFSC Code',
            id: 'ifsc',
        },
        {
            name: 'Bank Name',
            id: 'bank_name',
        },
        {
            name: 'Branch Name',
            id: 'branch',
        },
        {
            name: 'City',
            id: 'city',
        },
        {
            name: 'State',
            id: 'state',
        },
    ];
    return (
        <div className="header">
            <span className="title"> All Banks</span>
            <div className="filter">
                <Dropdown
                    placeHolder="Select Country"
                    data={data}
                    value={selectedCity}
                    handleDropdownChange={handleDropdownChange}
                />
                <Dropdown
                    placeHolder="Search by"
                    data={categoryData}
                    handleDropdownChange={categoryHandler}
                    value={selectedCategory}
                />
                {selectedCategory.id && (
                    <Input
                        placeHolder={`Type ${selectedCategory.name}...`}
                        setShowText={setShowText}
                        showText={showText}
                        value={searchTerm}
                        searchHandler={searchHandler}
                        setSearchTerm={setSearchTerm}
                        selectedCategory={selectedCategory}
                    />
                )}
            </div>
        </div>
    );
};
export default Header;
