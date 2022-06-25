/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import Header from '../Header';
import Pagination from '../Pagination';
import Table from '../Table';
import useFetch from '../useFetch';
import { debounce } from '../Utils';
import './home.scss';

const HomeContainer = props => {
    const [selectedCity, setSelectedCity] = useState({ name: 'MUMBAI', id: 1 });
    const [selectedCategory, setSelectedCategory] = useState({});
    const [rows, setRows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [bankList, isLoading] = useFetch(
        `https://vast-shore-74260.herokuapp.com/banks?city=${selectedCity.name}`,
        []
    );
    const [totalRecord, setTotalRecord] = useState(bankList.length);
    const [currentPage, setCurrentPage] = useState(1);
    const [showText, setShowText] = useState(false);
    const headings = ['Bank', 'IFSC', 'Branch', 'Bank Id', 'Address'];
    useEffect(() => {
        setUpdatedRows();
    }, [bankList]);

    useEffect(() => {
        setUpdatedRows();
    }, [currentPage]);

    //  this  will update table rows
    const setUpdatedRows = () => {
        const UpdatedbankList = [...bankList];
        setTotalRecord(UpdatedbankList.length);
        const updatedRows = getRows(UpdatedbankList.slice(currentPage - 1, 10 + currentPage - 1));
        setRows(updatedRows);
        setShowText(false);
    };
    // country change
    const handleDropdownChange = city => {
        setSelectedCity(city);
        setCurrentPage(1);
        setSearchTerm('');
        setUpdatedRows();
        setSelectedCategory('');
        setTotalRecord();
        setShowText(false);
    };
    // Selecting Category
    const categoryHandler = category => {
        setSelectedCategory(category);
        setUpdatedRows();
        setSearchTerm('');
        setShowText(false);
    };
    // Search handle
    const searchByCategory = () => {
        const updatedBankList = [...bankList];
        const filterBankList = updatedBankList.filter(bank => {
            return bank[selectedCategory.id].includes(searchTerm.toUpperCase());
        });
        setTotalRecord(filterBankList.length);
        const rows = getRows(filterBankList.slice(currentPage - 1, 10 + currentPage - 1));
        setRows(rows);
        setShowText(true);
    };
    const searchDelay = useCallback(debounce(searchByCategory, 500), [searchTerm]);
    const getRows = data => {
        let rows = [];
        data.forEach(item => {
            const itemArray = [];
            itemArray.push(item.bank_name);
            itemArray.push(item.ifsc);
            itemArray.push(item.branch);
            itemArray.push(item.bank_id);
            itemArray.push(item.address);
            rows.push(itemArray);
        });
        return rows;
    };
    return (
        <div className="container">
            <h2>Bank Application</h2>
            <div className="sub-container">
                <div style={{ display: 'flex', flexDirection: 'column' }} className="body-container">
                    <Header
                        handleDropdownChange={handleDropdownChange}
                        selectedCity={selectedCity}
                        showText={showText}
                        setShowText={setShowText}
                        searchHandler={searchDelay}
                        setSearchTerm={setSearchTerm}
                        categoryHandler={categoryHandler}
                        selectedCategory={selectedCategory}
                        searchTerm={searchTerm}
                    />
                    {isLoading ? <img src="/loader.gif" alt="loader" /> : <Table headings={headings} rows={rows} />}
                </div>
            </div>
            {totalRecord > 10 && (
                <div className="p-container">
                    <Pagination
                        currentPage={currentPage}
                        totalCount={totalRecord}
                        pageSize={10}
                        onPageChange={setCurrentPage}
                    />
                </div>
            )}
        </div>
    );
};
export default HomeContainer;
