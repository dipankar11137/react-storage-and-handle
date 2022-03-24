import React from 'react';
import { addToDB, removeFromDb } from '../../Utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        // console.log('item added', id);
        // localStorage.setItem(id, 1);
        addToDB(id);
    }
    // remove from cart
    const removeFromCart = id => {
        removeFromDb(id);
    }

    const addToCartWithParam = () => addToCart(id);
    return (
        <div className='product'>
            <h2>Buy this : {name}</h2>
            <p>Only for : ${price}</p>
            <p><small>It has id : {id}</small></p>

            <button onClick={() => addToCart(id)}>Purchase</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;