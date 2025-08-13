import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItems from '../shared/MenuItems';

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)

        })
    }, [])

    return (
        <section className='mb-12'>
            <SectionTitle 
                heading={'From Our Menu'}
                subHeading={'Check It Out'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-2'>View Full Menu</button>
        </section>
    );
};

export default PopularMenu;