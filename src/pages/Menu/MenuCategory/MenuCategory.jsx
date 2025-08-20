import React from 'react';
import MenuItems from '../../Home/shared/MenuItems';
import Cover from '../../../components/Cover';
import { Link } from 'react-router-dom';


const MenuCategory = ({ items, title, img }) => {
    console.log(title, img);

    return (
        <div className='mb-10'>
            {
                title && <Cover img={img} title={title}></Cover>
            }
            <div className='grid md:grid-cols-2 gap-10 mt-16'>
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className='btn btn-outline border-0 border-b-2'>Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;