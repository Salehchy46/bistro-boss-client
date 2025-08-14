import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Descript from './Decript/Descript';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import ChefsChoice from './ChefsCoice/ChefsChoice';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
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