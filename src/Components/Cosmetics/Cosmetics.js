import React from 'react';
import { add, multiply } from '../../Utilities/calculate';
// import add from '../../Utilities/calculate';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second);
    const totalMultiply = multiply(first, second)

    return (
        <div>
            <h1>Welcome to my Cosmetics stor</h1>
            <p>Total : {total}</p>
            <p>Total Multiply: {totalMultiply}</p>

        </div>
    );
};

export default Cosmetics;