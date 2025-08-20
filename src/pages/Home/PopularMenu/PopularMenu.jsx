import SectionTitle from '../../../components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuItems from '../shared/MenuItems';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className='mb-12'>
            <SectionTitle 
                heading={'From Our Menu'}
                subHeading={'Check It Out'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className='text-center my-4'>
                <button className='btn btn-outline border-0 border-b-2'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;