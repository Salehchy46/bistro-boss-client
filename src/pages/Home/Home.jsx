import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Descript from './Decript/Descript';
import PopularMenu from './PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Descript></Descript>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;