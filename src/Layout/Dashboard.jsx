import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {

    const [cart] = useCart();

    return (
        <div className='flex'>
            {/* Dashboard Side bar */}
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu">
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
                    <div className='divider'></div>
                    <li>
                        <NavLink to='/' className={({ isActive }) =>
                            isActive
                                ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                        }>
                            <FaHome className='mr-4' />
                            Home
                        </NavLink>
                        <NavLink to='/menu' className={({ isActive }) =>
                            isActive
                                ? "bg-black uppercase font-bold text-white px-3 py-2 rounded"
                                : "px-3 py-2 uppercase font-bold rounded hover:border-b-0"
                        }>
                            <FaList className='mr-4' />
                            Menu
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