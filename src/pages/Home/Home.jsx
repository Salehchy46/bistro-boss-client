import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Descript from './Decript/Descript';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import ChefsChoice from './ChefsCoice/ChefsChoice';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Descript></Descript>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <ChefsChoice></ChefsChoice>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;