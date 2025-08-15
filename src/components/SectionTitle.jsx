import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center mt-12 mb-12 md:w-4/12'>
            <p className='text-yellow-600 mb-2'>---{subHeading}---</p>
            <h3 className='text-4xl uppercase border-y-4 border-gray-400 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;