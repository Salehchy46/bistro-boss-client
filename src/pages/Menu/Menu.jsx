import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../components/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    //filtered menu items
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* Main Menu ITems cover */}
            <Cover
                bgImage={menuImg}
                coverHeading={'OUR MENU'}
                coverSubHeading={'WOULD YOU LIKE TO TRY A DISH?'}
            ></Cover>
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            ></SectionTitle>
            {/* Offered Menu Items*/}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert Menu Items */}
            <MenuCategory
                items={dessert}
                img={dessertImg}
                title={'dessert'}>
            </MenuCategory>
            {/* Pizza Menu Items */}
            <MenuCategory
                items={pizza}
                img={pizzaImg}
                title={'pizza'}>
            </MenuCategory>
            {/* Salad Menu Items */}
            <MenuCategory
                items={salad}
                img={saladImg}
                title={'salad'}>
            </MenuCategory>
            {/* soup Menu Items */}
            <MenuCategory
                items={soup}
                img={soupImg}
                title={'soup'}>
            </MenuCategory>
        </div>
    );
};

export default Menu;