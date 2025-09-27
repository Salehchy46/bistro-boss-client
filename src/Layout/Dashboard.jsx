import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaJediOrder, FaList, FaMale, FaShoppingCart, FaUsers, FaUtensils, FaUtensilSpoon, FaVoicemail, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    const [cart] = useCart();

    //TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
    // const isAdmin = true;

    return (
        <div className='flex'>
            {/* Dashboard Side bar */}
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminhome' className={({ isActive }) =>
                                    isActive
                                        ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                        : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                                }>
                                    <FaHome className='mr-4' />
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/additems' className={({ isActive }) =>
                                    isActive
                                        ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                        : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                                }>
                                    <FaUtensils className='mr-4' />
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageitems' className={({ isActive }) =>
                                    isActive
                                        ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                        : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                                }>
                                    <FaList className='mr-4' />
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/managebookings' className={({ isActive }) =>
                                    isActive
                                        ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                        : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                                }>
                                    <FaBook className='mr-4' />
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allusers' className={({ isActive }) =>
                                    isActive
                                        ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                        : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                                }>
                                    <FaUsers className='mr-4' />
                                    All Users
                                </NavLink>
                            </li>
                         </> 
                        : 
                        <>
                            <li>
                                <NavLink to='/dashboard/userhome' className={({ isActive }) =>
                                    isActive
                                        ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                        : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                                }>
                                    <FaHome className='mr-4' />
                                    User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/reservation' className={({ isActive }) =>
                                    isActive
                                        ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                        : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                                }>
                                    <FaCalendar className='mr-4' />
                                    Reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/paymenthistory' className={({ isActive }) =>
                                    isActive
                                        ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                        : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                                }>
                                    <FaWallet className='mr-4' />
                                    Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart' className={({ isActive }) =>
                                    isActive
                                        ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                        : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                                }>
                                    <FaShoppingCart className='mr-4' />
                                    My Cart ({cart.length})
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/review' className={({ isActive }) =>
                                    isActive
                                        ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                        : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                                }>
                                    <FaAd className='mr-4' />
                                    Add Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/booking' className={({ isActive }) =>
                                    isActive
                                        ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                        : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                                }>
                                    <FaList className='mr-4' />
                                    My booking
                                </NavLink>
                            </li>
                        </>
                    }
                    <div className='divider'></div>
                    {/* Shared nav links */}
                    <li>
                        <NavLink to='/' className={({ isActive }) =>
                            isActive
                                ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                        }>
                            <FaHome className='mr-4' />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu' className={({ isActive }) =>
                            isActive
                                ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                        }>
                            <FaList className='mr-4' />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad' className={({ isActive }) =>
                            isActive
                                ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                        }>
                            <FaJediOrder className='mr-4' />
                            Order
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactus' className={({ isActive }) =>
                            isActive
                                ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                        }>
                            <FaEnvelope className='mr-4' />
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard Navigation Content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;