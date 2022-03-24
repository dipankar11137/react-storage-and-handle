import React from 'react';
import Cosmetic from '../Cosmatic/Cosmetic';

const Cosmetics = () => {

    const cosmetics = [
        {
            "id": "623c7039205690e84ac6e24d",
            "price": 80,
            "name": "Adrian Woodward"
        },
        {
            "id": "623c70392d9f83fb73d842c5",
            "price": 551,
            "name": "Abbott Harmon"
        },
        {
            "id": "623c7039890babd067d20b48",
            "price": 262,
            "name": "Molina Berger"
        },
        {
            "id": "623c70397d4e7a0e8504aebf",
            "price": 89,
            "name": "Dana Villarreal"
        },
        {
            "id": "623c70395e3d828ab2a8cc7e",
            "price": 98,
            "name": "Harrell Donovan"
        }
    ]

    return (
        <div>
            <h1>Welcome to my Cosmetics stor</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;