import React from 'react';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    return (
        <div>
            <hr />
            <h1>Id : {id}</h1>
            <h2>Buy this : {name}</h2>
            <p>Only for : ${price}</p>
        </div>
    );
};

export default Cosmetic;