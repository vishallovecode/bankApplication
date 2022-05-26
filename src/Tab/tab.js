import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './tab.scss';

const Tab = props => {
    const [data, setData] = useState([
        { id: '1', name: 'All Banks', route: '/' },
        { id: '2', name: 'Favourites', route: '/favourites' },
    ]);
    const [selected, setSelected] = useState('1');
    const onTabClick = tab => {
        setSelected(tab.id);
        props.history.push(tab.route);
    };
    return (
        <div className="tab">
            {data.map(tab => (
                <div
                    key={tab.id}
                    className={`${selected === tab.id ? 'active' : ''} tab-item__heading tab-item`}
                    onClick={() => onTabClick(tab)}
                    to="/bank-details"
                >
                    {tab.name}{' '}
                </div>
            ))}
        </div>
    );
};
export default withRouter(Tab);
