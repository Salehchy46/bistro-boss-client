import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../components/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import PopularMenu from '../Home/PopularMenu/PopularMenu'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                bgImage={menuImg}
                coverHeading={'OUR MENU'}
                coverSubHeading={'WOULD YOU LIKE TO TRY A DISH?'}
            ></Cover>
            <PopularMenu></PopularMenu>
            <Cover
                bgImage={menuImg}
                coverHeading={'OUR MENU'}
                coverSubHeading={'WOULD YOU LIKE TO TRY A DISH?'}
            ></Cover>
            <PopularMenu></PopularMenu>
            <Cover
                bgImage={menuImg}
                coverHeading={'OUR MENU'}
                coverSubHeading={'WOULD YOU LIKE TO TRY A DISH?'}
            ></Cover>
            <PopularMenu></PopularMenu>
            <Cover
                bgImage={menuImg}
                coverHeading={'OUR MENU'}
                coverSubHeading={'WOULD YOU LIKE TO TRY A DISH?'}
            ></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;