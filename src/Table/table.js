import * as React from 'react';
import { withRouter } from 'react-router-dom';
import Cell from './Cell';
import './table.scss';

const Table = props => {
    const renderHeadingRow = (_cell, cellIndex) => {
        const { headings } = props;

        return <Cell key={`heading-${cellIndex}`} content={headings[cellIndex]} header={true} />;
    };
    const viewBankDetail = (pincode, data) => {
        props.history.push(`/bank-details/${pincode}`);
        localStorage.setItem('bankDetails', JSON.stringify(data));
    };

    const renderRow = (_row, rowIndex) => {
        const { rows } = props;

        return (
            <tr key={`row-${rowIndex}`}>
                {rows[rowIndex].map((_cell, cellIndex) => {
                    return (
                        <Cell
                            key={`${rowIndex}-${cellIndex}`}
                            content={rows[rowIndex][cellIndex]}
                            onClick={() => viewBankDetail(rows[rowIndex][1], rows[rowIndex])}
                        />
                    );
                })}
            </tr>
        );
    };
    const { headings, rows } = props;

    const theadMarkup = <tr key="heading">{headings.map(renderHeadingRow)}</tr>;

    const tbodyMarkup = rows.map(renderRow);

    return (
        <table className="Table">
            <thead>{theadMarkup}</thead>
            {
                <tbody>
                    {rows.length >= 1 ? (
                        tbodyMarkup
                    ) : (
                        <tr className="Cell">
                            {' '}
                            <img src="/noresult.png" alt="No result found" className="no-result" />
                        </tr>
                    )}
                </tbody>
            }
        </table>
    );
};
export default withRouter(Table);
