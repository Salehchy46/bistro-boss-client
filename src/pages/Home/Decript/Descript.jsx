import React from 'react';
import chefService from '../../../assets/home/chef-service.jpg';
import Cover from '../../../components/Cover';

const Descript = () => {
    return (
        <div>
            <Cover
                bgImage={chefService}
                coverHeading={'Bistro Boss'}
                coverSubHeading={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'}
            >
            </Cover>
        </div>
    );
};

export default Descript;