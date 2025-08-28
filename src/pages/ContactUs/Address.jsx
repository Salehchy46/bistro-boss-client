import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoTime } from "react-icons/io5";

const Address = () => {
    return (
        <div className=''>
            <SectionTitle heading={'Our Location'} subHeading={'Visit Us'}></SectionTitle>
            <div className='mx-auto lg:flex justify-center gap-5'>
                <div className='card w-64 shadow-sm'>
                    <span className='px-32 py-5 bg-yellow-700 w-64'><FaPhoneVolume className=''></FaPhoneVolume></span>
                    <div className="card-body items-center text-center px-5">
                        <h2 className="card-title">PHONE</h2>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className='card w-64 shadow-sm'>
                    <span className='px-32 py-5 bg-yellow-700 w-64'><IoLocationSharp className=''></IoLocationSharp></span>
                    <div className="card-body items-center text-center px-5">
                        <h2 className="card-title">ADDRESS</h2>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className='card w-64 shadow-sm'>
                    <span className='px-32 py-5 bg-yellow-700 w-64'><IoTime className=''></IoTime></span>
                    <div className="card-body items-center text-center px-5">
                        <h2 className="card-title">WORKING HOURS</h2>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p> Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
            <SectionTitle heading={'Contact Form'} subHeading={'Send Us a Message'}></SectionTitle>
        </div>
    );
};

export default Address;