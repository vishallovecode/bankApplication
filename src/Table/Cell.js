import * as React from 'react';
import './table.scss';

const Cell = ({ content, header, onClick }) => {
    const cellMarkup = header ? (
        <th className="Cell Cell-header">{content}</th>
    ) : (
        <td className="Cell" onClick={onClick}>
            {content}
        </td>
    );

    return cellMarkup;
};
export default Cell;
