import React from 'react';
import chefService from '../../../assets/home/chef-service.jpg';

const Descript = () => {
    return (
        <div
            className="hero min-h-[500px] bg-fixed p-20 my-24"
            style={{
                backgroundImage:
                    `url(${chefService})`,
            }}
        >
            <div className="hero-overlay bg-white"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl text-black">Bistro Boss</h1>
                    <p className="mb-5  text-black">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Descript;