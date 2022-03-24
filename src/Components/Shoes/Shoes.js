import React from 'react';
import { multiply } from '../../Utilities/calculate';

const Shoes = () => {
    const first = 55;
    const second = 20;
    const totalMultiply = multiply(first, second)

    return (
        <div>
            <h2>This is Shoes Component</h2>
            <p>Total Multiply: {totalMultiply}</p>
        </div>
    );
};

export default Shoes;