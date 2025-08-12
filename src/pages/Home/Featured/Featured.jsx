import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className='featured-item pt-10 my-20'>
            <SectionTitle subHeading={"Check it out"} heading={"From Our Menu"}></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 29, 2029</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn border-b-2'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;