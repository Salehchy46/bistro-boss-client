import React from 'react';
import Cover from '../../components/Cover';
import contactBanner from '../../assets/contact/banner.jpg'

const ContactHero = () => {
    return (
        <div>
            <Cover 
                bgImage={contactBanner}
                coverHeading={'Contact Us'}
                coverSubHeading={'WOULD YOU LIKE TO TRY A DISH?'}>
            </Cover>
        </div>
    );
};

export default ContactHero;