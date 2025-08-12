import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Descript from './Decript/Descript';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Descript></Descript>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;