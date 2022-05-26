import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './bankdetail.scss';
const BankDetails = props => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const details = JSON.parse(localStorage.getItem('bankDetails'));
        console.log(details);
        setDetails(details);
    }, []);
    console.log(props?.match?.params?.id);
    return (
        <div className="bankDetails">
            <span>
                <b>Name :</b> {details && details[0]}
            </span>
            <span>
                <b>Branch : </b>
                {details && details[2]}
            </span>
            <span className="s-con">
                <span>
                    <b>IFSC:</b> {details && details[1]}
                </span>
                <span>
                    <b>Bank Id: </b>
                    {details && details[3]}
                </span>
            </span>
            <span>
                <b>Address: </b>
                {details && details[4]}
            </span>
        </div>
    );
};

export default BankDetails;
