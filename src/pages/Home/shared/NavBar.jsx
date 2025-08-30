import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaCartPlus } from "react-icons/fa";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li> 
        <li><Link to='/order/salad'>Order</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li><Link to='/contactus'>Contact Us</Link></li>
        <li>
            <Link>
                <button className="btn">
                    <FaCartPlus className='mr-2'></FaCartPlus>
                    <div className="badge badge-sm badge-secondary">+0</div>
                </button>
            </Link>
        </li>

        {
            user ? <>
                <li><Link onClick={handleLogOut} className=''>Log Out</Link></li>
            </> : <>
                <li><Link to='/login'>Login</Link></li>
            </>
        }
    </>

    return (
        <div>
            <div className="navbar fixed z-10 opacity-45 text-black bg-white font-bold max-w-7xl backdrop-blur-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navOption}
                        </ul>
                    </div>
                    <div className='bg-transparent'>
                        <img src="https://i.ibb.co.com/21VLyCFQ/download-1.webp" alt="" className='w-30 mix-blend-multiply hue-rotate-90 saturate-200 rounded-full h-20 object-cover' />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                {
                    user ? <div className='navbar-end'>
                        <span className='mr-2'>{user?.displayName}</span>
                        <img src={user?.photoURL} className='w-10 h-10 rounded-full ' alt="" />
                    </div> : <>
                        <p className='navbar-end'>Login Please</p>
                    </>
                }
            </div>
        </div>
    );
};

export default NavBar;