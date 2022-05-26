import React from 'react';
import { usePagination } from './usePagination';
import './pagination.scss';
const Pagination = props => {
    const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });
    if (currentPage === 0 || paginationRange?.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange && [paginationRange?.length - 1];
    return (
        <ul className={`pagination-container ${className ? className : ''}`}>
            {/* Left navigation arrow */}
            <li className={`pagination-item ${currentPage === 1 ? 'disabled' : 'active'}`} onClick={onPrevious}>
                <div className="arrow left" />
            </li>
            {paginationRange?.map(pageNumber => {
                return (
                    <li
                        className={`pagination-item ${pageNumber === currentPage ? 'selected' : ''}`}
                        onClick={pageNumber === '...' ? null : () => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li className={`pagination-item ${currentPage === lastPage ? 'disabled' : ''}`} onClick={onNext}>
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default Pagination;