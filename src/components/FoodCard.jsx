import React from 'react';

const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Food"
                    className="rounded-xl" />
            </figure>
            <p className='absolute right-0 mr-4 mt-4 p-4 rounded-2xl bg-slate-900 text-white'>$ {price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline bg-slate-200 border-orange-400 text-black border-0 border-b-2 hover:bg-black hover:text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;