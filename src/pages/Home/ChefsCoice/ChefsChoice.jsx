import React from 'react';
import food from '../../../assets/home/slide1.jpg'
import SectionTitle from '../../../components/SectionTitle';

const ChefsChoice = () => {

    const card = <>
        <div className='card bg-base-200'>
            <img src={food} className='h-72 object-cover rounded-2xl' alt="" />
            <div className='text-center mx-auto card-body items-center'>
                <h4 className='card-title'>Caeser Salad</h4>
                <p className='text-center'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className='card-actions mx-auto'>
                    <button className='btn btn-outline border-0 border-b-2 border-yellow-700'>Add to Cart</button>
                </div>
            </div>
        </div>
    </>

    return (
        <section>
            <SectionTitle
                subHeading={"Should Try"}
                heading={"Chef Recommends"}
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-4'>
                {card}
                {card}
                {card}
            </div>
        </section>
    );
};

export default ChefsChoice;