import React from 'react';

const MenuItems = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className='flex space-x-4'>
            <img src={image} className='rounded-e-full w-20 rounded-bl-full' alt="" />
            <div>
                <h3 className='uppercase'>{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItems;